import { loginPage } from '@/pages/login';

describe('Fail Login', () => {
  before(() => {
    loginPage.goto('/');
  });

  it('should login to the application', () => {
    loginPage.getTitle().should('eq', loginPage.pageTitle);
  });

  it('should get login error', () => {
    loginPage.login('locked_out_user', 'secret_sauce');
    loginPage.getError().should('have.text', loginPage.errorText);
  });
});
