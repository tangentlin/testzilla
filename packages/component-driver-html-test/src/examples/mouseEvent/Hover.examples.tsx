import { HTMLButtonDriver, HTMLElementDriver } from '@atomic-testing/component-driver-html';
import { IExampleUnit, ScenePart, TestEngine, byDataTestId } from '@atomic-testing/core';
import { TestSuiteInfo } from '@atomic-testing/test-runner';
import React, { useCallback } from 'react';

export const HoverMouseEventExample = () => {
  const [showDetail, setShowDetail] = React.useState(false);

  const onMouseOver = useCallback(() => {
    setShowDetail(true);
  }, []);

  const onMouseOut = useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <React.Fragment>
      <button data-testid="hover-target" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        Hover me to show
      </button>
      {showDetail ? <div data-testid="hover-detail">Details shown</div> : null}
    </React.Fragment>
  );
};

export const hoverMouseEventExampleScenePart = {
  button: {
    locator: byDataTestId('hover-target'),
    driver: HTMLButtonDriver,
  },
  tip: {
    locator: byDataTestId('hover-detail'),
    driver: HTMLElementDriver,
  },
} satisfies ScenePart;

export const hoverMouseEventExample: IExampleUnit<typeof hoverMouseEventExampleScenePart, JSX.Element> = {
  title: 'Hover event',
  scene: hoverMouseEventExampleScenePart,
  ui: <HoverMouseEventExample />,
};

export const hoverMouseEventExampleTestSuite: TestSuiteInfo<typeof hoverMouseEventExample.scene> = {
  title: 'Mouse event: Hover',
  url: '/mouse-event',
  tests: (getTestEngine, { describe, test, beforeEach, afterEach, assertEqual }) => {
    describe(`${hoverMouseEventExample.title}`, () => {
      let testEngine: TestEngine<typeof hoverMouseEventExample.scene>;

      // Use the following beforeEach to work around the issue of Playwright's page being undefined
      // @ts-ignore
      beforeEach(function ({ page }) {
        // @ts-ignore
        testEngine = getTestEngine(hoverMouseEventExample.scene, { page });
        if (typeof arguments[0] === 'function') {
          arguments[0]();
        }
      });

      afterEach(async () => {
        await testEngine.cleanUp();
      });

      test(`Detail is not shown when not hover`, async () => {
        assertEqual(await testEngine.parts.tip.isVisible(), false);
      });

      test(`Detail is shown when hover`, async () => {
        await testEngine.parts.button.hover();
        // Wait until the tip is visible, this is because tooltip shows in the next rendering cycle
        await testEngine.parts.tip.waitUntil({
          condition: 'visible',
          timeoutMs: 500,
        });
        assertEqual(await testEngine.parts.tip.isVisible(), true);
      });
    });
  },
};
