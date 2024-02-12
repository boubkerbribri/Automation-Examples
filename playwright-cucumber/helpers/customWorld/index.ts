import { config } from 'dotenv';
import {
  World,
  setDefaultTimeout,
  setWorldConstructor
} from '@cucumber/cucumber';
import type { Page } from '@playwright/test';

config();

export interface ICustomWorld extends World {
  page?: Page;
  url?: string;
}

export class CustomWorld extends World implements ICustomWorld {
  url = process.env.URL ?? 'https://www.saucedemo.com/';
}
setDefaultTimeout(1000 * 60 * 2);
setWorldConstructor(CustomWorld);
