import type { Locator, Page } from 'playwright';
import Common from '@/pages/common';

export default class Home extends Common {
  public readonly bodyTitle: string;
  private readonly bodyTitleSpan: Locator;
  private readonly inventoryList: Locator;
  private readonly inventoryItems: Locator;
  private readonly backpackAddtoCartbtn: Locator;
  private readonly bikeAddtoCartbtn: Locator;
  private readonly shoppingCartContainer: Locator;
  private readonly shoppingCartLink: Locator;
  private readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    super(page);
    // Text attributes
    this.bodyTitle = 'Products';

    // Selectors attributes
    // List of products
    this.bodyTitleSpan = this.page.locator('#header_container .title');
    this.inventoryList = this.page.locator('.inventory_list');
    this.inventoryItems = this.inventoryList.locator('.inventory_item');
    this.backpackAddtoCartbtn = this.inventoryItems.locator(
      '[data-test=add-to-cart-sauce-labs-backpack]'
    );
    this.bikeAddtoCartbtn = this.inventoryItems.locator(
      '[data-test=add-to-cart-sauce-labs-bike-light]'
    );

    // Shopping Carts
    this.shoppingCartContainer = this.page.locator('#shopping_cart_container');
    this.shoppingCartLink = this.shoppingCartContainer.locator(
      '.shopping_cart_link'
    );
    this.shoppingCartBadge = this.shoppingCartLink.locator(
      '.shopping_cart_badge'
    );
  }

  /**
   * Get Body title of the page
   * @returns
   */
  getbodyTitle() {
    return this.bodyTitleSpan.textContent();
  }

  /**
   * Count products displayed
   * @returns
   */
  countProducts() {
    return this.inventoryItems.count();
  }

  /**
   * Count product on shopping carts
   * @returns
   */
  async countShoppingCartsProducts() {
    return Number.parseInt(
      (await this.shoppingCartBadge.textContent()) || '',
      10
    );
  }

  /**
   * Add product to cart and get number of products on carts
   * @param product
   */
  async addProductToCart(product: string) {
    let addToCartBtn: Locator;
    switch (product) {
      case 'Backpack':
        addToCartBtn = this.backpackAddtoCartbtn;
        break;
      case 'Bike':
        addToCartBtn = this.bikeAddtoCartbtn;
        break;
      default:
        throw new Error(`${product} is not on the list`);
    }

    await addToCartBtn.click();
  }
}
