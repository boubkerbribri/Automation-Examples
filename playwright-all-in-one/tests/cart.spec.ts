import { expect } from '@playwright/test';
import { test } from '@/fixtures/login';
import Login from '@/pages/login';
import Home from '@/pages/home';

test('Cart test', async ({ page }) => {
  const loginPage = new Login(page);
  const homePage = new Home(page);

  await test.step('should go to login page', async () => {
    const title = await loginPage.getTitle();
    expect(title).toEqual(loginPage.pageTitle);
  });

  await test.step('should login to the application', async () => {
    await loginPage.login('standard_user', 'secret_sauce');

    const bodyTitle = await homePage.getbodyTitle();
    expect(bodyTitle).toEqual(homePage.bodyTitle);
  });

  await test.step('should count products', async () => {
    const numberofProducts = await homePage.countProducts();
    expect(numberofProducts).toEqual(6);
  });

  await test.step('should add "Backpack" to cart', async () => {
    const numberofProductsInCarts = await homePage.addProductToCart('Backpack');
    expect(numberofProductsInCarts).toEqual(1);
  });

  await test.step('should add "Bike" to cart', async () => {
    const numberofProductsInCarts = await homePage.addProductToCart('Bike');
    expect(numberofProductsInCarts).toEqual(2);
  });
});
