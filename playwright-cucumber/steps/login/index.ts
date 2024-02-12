import { Given, When, Then } from '@cucumber/cucumber';
import { type Page, expect } from '@playwright/test';
import Login from '@/pages/login';
import type { ICustomWorld } from 'helpers/customWorld';

Given('User is on login page', async function (this: ICustomWorld) {
  const loginPage = new Login(this.page as Page);
  const title = await loginPage.getTitle();
  expect(title).toEqual(loginPage.pageTitle);
});

When(
  'User log with {string} and {string}',
  async function (this: ICustomWorld, username: string, password: string) {
    const loginPage = new Login(this.page as Page);
    loginPage.setPage(this.page as Page);
    await loginPage.login(username, password);
  }
);

Then(
  'The blocked user error is displayed',
  async function (this: ICustomWorld) {
    const loginPage = new Login(this.page as Page);
    const errortext = await loginPage.getError();
    expect(errortext).toEqual(loginPage.errorText);
  }
);
