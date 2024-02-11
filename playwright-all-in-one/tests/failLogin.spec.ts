import { expect } from '@playwright/test';
import { test } from '@/fixtures/login';
import Login from '@/pages/login';

test('Fail Login test', async ({ page }) => {
  const loginPage = new Login(page);

  await test.step('should be to login page', async () => {
    const title = await loginPage.getTitle();
    expect(title).toEqual(loginPage.pageTitle);
  });

  await test.step('should get login error', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');

    const errortext = await loginPage.getError();
    expect(errortext).toEqual(loginPage.errorText);
  });
});
