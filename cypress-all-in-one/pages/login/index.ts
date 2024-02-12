import Common from '@/pages/common';

class Login extends Common {
  public readonly pageTitle: string;
  public readonly errorText: string;
  private readonly usernameInput: string;
  private readonly passwordInput: string;
  private readonly loginButton: string;
  private readonly errorBlock: string;

  constructor() {
    super();
    // Text attributes
    this.pageTitle = 'Swag Labs';
    this.errorText = 'Epic sadface: Sorry, this user has been locked out.';

    // Selectors attributes
    this.usernameInput = '[data-test=username]';
    this.passwordInput = '[data-test=password]';
    this.loginButton = '[data-test=login-button]';
    this.errorBlock = '[data-test=error]';
  }

  /**
   * Login to application
   * @param username
   * @param password
   */
  login(username: string, password: string) {
    cy.get(this.usernameInput).type(username);

    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }

  /**
   * Get error text
   * @returns
   */
  getError() {
    return cy.get(this.errorBlock);
  }
}
export const loginPage = new Login();
