import { loginPage } from '@/pages/login';
import { homePage } from '@/pages/home';

describe('Cart', () => {
  before(() => {
    loginPage.goto('/');
  });

  it('should login to the application', () => {
    loginPage.getTitle().should('eq', loginPage.pageTitle);
  });

  it('should login to the application', () => {
    loginPage.login('standard_user', 'secret_sauce');
    homePage.getbodyTitle().should('have.text', homePage.bodyTitle);
  });

  it('should count products', () => {
    homePage.getinventoryItems().should('have.length', 6);
  });

  it('should add "Backpack" to cart', () => {
    homePage.addProductToCart('Backpack');
    homePage.getNumberOfProductsInCart().should('have.text', 1);
  });

  it('should add "Bike" to cart', () => {
    homePage.addProductToCart('Bike');
    homePage.getNumberOfProductsInCart().should('have.text', 2);
  });
});
