import type { Page } from 'playwright';

export default class Common {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Set page with new instance if needed
   * @param newPage
   */
  setPage(newPage: Page) {
    this.page = newPage;
  }

  /**
   * Rewrite goto to use with page objects
   * @param url
   */
  async goto(url: string) {
    await this.page.goto(url);
  }

  /**
   * Get Page
   * @returns
   */
  getTitle() {
    return this.page.title();
  }
}
