import type { Locator, Page } from '@playwright/test';
import Common from '@/pages/common';

export default class Login extends Common {
  public readonly pageTitle: string;
  public readonly errorText: string;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorBlock: Locator;

  constructor(page: Page) {
    super(page);
    // Text attributes
    this.pageTitle = 'Swag Labs';
    this.errorText = 'Epic sadface: Sorry, this user has been locked out.';

    // Selectors attributes
    this.usernameInput = this.page.getByTestId('username');
    this.passwordInput = this.page.getByTestId('password');
    this.loginButton = this.page.getByTestId('login-button');
    this.errorBlock = this.page.getByTestId('error');
  }

  /**
   * Login to application
   * @param username
   * @param password
   */
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Get error text
   * @returns
   */
  getError() {
    return this.errorBlock.textContent();
  }
}
