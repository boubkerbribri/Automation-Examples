import { When, Then } from '@cucumber/cucumber';
import { type Page, expect } from '@playwright/test';
import Home from '@/pages/home';
import type { ICustomWorld } from 'helpers/customWorld';

Then('The Home page title is displayed', async function (this: ICustomWorld) {
  const homePage = new Home(this.page as Page);
  const bodyTitle = await homePage.getbodyTitle();
  expect(bodyTitle).toEqual(homePage.bodyTitle);
});

Then(
  'Number of products displayed is {int}',
  async function (this: ICustomWorld, exNbr: number) {
    const homePage = new Home(this.page as Page);
    const numberofProducts = await homePage.countProducts();
    expect(numberofProducts).toEqual(exNbr);
  }
);

When(
  'User add product {string} to cart',
  async function (this: ICustomWorld, product: string) {
    const homePage = new Home(this.page as Page);
    await homePage.addProductToCart(product);
  }
);

Then(
  'Number of products in Cart is {int}',
  async function (this: ICustomWorld, exNbr: number) {
    const homePage = new Home(this.page as Page);
    const numberofProductsInCarts = await homePage.countShoppingCartsProducts();
    expect(numberofProductsInCarts).toEqual(exNbr);
  }
);
