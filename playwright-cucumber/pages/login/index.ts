import type { Locator, Page } from 'playwright';
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
    this.usernameInput = this.page.locator('[data-test=username]');
    this.passwordInput = this.page.locator('[data-test=password]');
    this.loginButton = this.page.locator('[data-test=login-button]');
    this.errorBlock = this.page.locator('[data-test=error]');
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
