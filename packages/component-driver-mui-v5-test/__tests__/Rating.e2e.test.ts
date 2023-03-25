import { goto, playwrightGetTestEngine, playWrightTestAdapter } from '@atomic-testing/playwright';
import { testRunner } from '@atomic-testing/test-runner';
import { ratingTestSuite } from '../src/examples';

testRunner(ratingTestSuite, playWrightTestAdapter, {
  // @ts-ignore
  goto,
  getTestEngine: playwrightGetTestEngine,
});
