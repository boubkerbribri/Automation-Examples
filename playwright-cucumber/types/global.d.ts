import type { Page } from '@playwright/test';

/* eslint-disable vars-on-top, no-var */
declare global {
  var page: Page;
  var url: string;
}

export {};
