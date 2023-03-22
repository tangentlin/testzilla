import { TestEngine } from '@atomic-testing/core';
import { createTestEngine } from '@atomic-testing/react';

import { basicRatingExample } from '../src/examples/Rating.examples';

describe(`${basicRatingExample.title}`, () => {
  let testEngine: TestEngine<typeof basicRatingExample.scene>;
  beforeEach(() => {
    testEngine = createTestEngine(basicRatingExample.ui, basicRatingExample.scene);
  });

  afterEach(async () => {
    await testEngine.cleanUp();
  });

  test(`Basic rating's Value should be 2`, async () => {
    const value = await testEngine.parts.basic.getValue();
    expect(value).toBe(2);
  });

  test(`Disabled rating's value should be 2`, async () => {
    const value = await testEngine.parts.disabled.getValue();
    expect(value).toBe(2);
  });

  describe('Setting rating value to a valid new value', () => {
    const targetValue = 3.5;
    let success: boolean;
    beforeEach(async () => {
      success = await testEngine.parts.basic.setValue(targetValue);
    });

    test(`Success should be true`, async () => {
      expect(success).toBe(true);
    });

    test(`The component's value should be set to the new value`, async () => {
      const value = await testEngine.parts.basic.getValue();
      expect(value).toBe(targetValue);
    });
  });

  describe('Setting rating value to an invalid new value', () => {
    const targetValue = 6;
    let success: boolean;
    beforeEach(async () => {
      success = await testEngine.parts.basic.setValue(targetValue);
    });

    test(`Success should be false`, async () => {
      expect(success).toBe(false);
    });

    test(`The component's value should remain to be the same old value`, async () => {
      const value = await testEngine.parts.basic.getValue();
      expect(value).toBe(2);
    });
  });

  describe('Setting rating value to null', () => {
    const targetValue = null;
    let success: boolean;
    beforeEach(async () => {
      success = await testEngine.parts.basic.setValue(targetValue);
    });

    test(`Setting to null success should be true`, async () => {
      expect(success).toBe(true);
    });

    // TODO: https://github.com/tangentlin/atomic-testing/issues/68
    test.skip(`The component's value should remain to be null`, async () => {
      const value = await testEngine.parts.basic.getValue();
      expect(value).toBe(null);
    });
  });
});