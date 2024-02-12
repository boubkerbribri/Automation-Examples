import { config } from 'dotenv';
import { type Browser, chromium } from '@playwright/test';
import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber';
import { ICustomWorld } from 'helpers/customWorld';

config();

let browser: Browser;

BeforeAll(async function () {
  // Opening Chromium browser
  browser = await chromium.launch({
    headless: !!process.env.HEADLESS
  });
});

Before(async function (this: ICustomWorld) {
  this.page = await browser.newPage();
  await this.page.goto(this.url!);
});

After(async function (this: ICustomWorld, { pickle, result }) {
  // Taking screenshot if failed
  if (result?.status == Status.FAILED) {
    await this.page?.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: 'png',
      fullPage: true
    });
  }

  await this.page?.close();
});

AfterAll(async function () {
  // Closing Browser
  await browser.close();
});
