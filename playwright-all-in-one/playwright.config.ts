import { config } from 'dotenv';
import { defineConfig, devices } from '@playwright/test';

config();

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: false,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.forbidOnly,

  // Retry on CI only.
  //retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: [
    ['html', { open: 'never' }],
    ['list', { printSteps: true }]
  ],
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: process.env.URL ?? 'https://www.saucedemo.com',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',

    // To run with HEADLESS
    headless: !!process.env.HEADLESS,

    // To get screenshots
    screenshot: 'only-on-failure',

    // data-test
    testIdAttribute: 'data-test'
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
});
