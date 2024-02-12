import { config } from 'dotenv';
import { defineConfig } from 'cypress';

config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.URL ?? 'https://www.saucedemo.com',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'test-results/screenshots',
    testIsolation: false
  }
});
