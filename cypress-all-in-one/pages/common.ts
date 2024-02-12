export default class Common {
  /**
   * Rewrite goto to use with page objects
   * @param url
   */
  goto(url: string) {
    cy.visit(url);
  }

  /**
   * Get Page
   * @returns
   */
  getTitle() {
    return cy.title();
  }
}
