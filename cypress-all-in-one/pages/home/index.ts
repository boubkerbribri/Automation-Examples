import Common from '@/pages/common';

class Home extends Common {
  public readonly bodyTitle: string;
  private readonly bodyTitleSpan: string;
  private readonly inventoryList: string;
  private readonly inventoryItems: string;
  private readonly backpackAddtoCartbtn: string;
  private readonly bikeAddtoCartbtn: string;
  private readonly shoppingCartContainer: string;
  private readonly shoppingCartLink: string;
  private readonly shoppingCartBadge: string;

  constructor() {
    super();
    // Text attributes
    this.bodyTitle = 'Products';

    // Selectors attributes
    // List of products
    this.bodyTitleSpan = '#header_container .title';
    this.inventoryList = '.inventory_list';
    this.inventoryItems = `${this.inventoryList} .inventory_item`;
    this.backpackAddtoCartbtn = `${this.inventoryItems} [data-test=add-to-cart-sauce-labs-backpack]`;
    this.bikeAddtoCartbtn = `${this.inventoryItems} [data-test=add-to-cart-sauce-labs-bike-light]`;

    // Shopping Carts
    this.shoppingCartContainer = '#shopping_cart_container';
    this.shoppingCartLink = `${this.shoppingCartContainer} .shopping_cart_link`;
    this.shoppingCartBadge = `${this.shoppingCartLink} .shopping_cart_badge`;
  }

  /**
   * Get Body title of the page
   * @returns
   */
  getbodyTitle() {
    return cy.get(this.bodyTitleSpan);
  }

  /**
   * Count products displayed
   * @returns
   */
  getinventoryItems() {
    return cy.get(this.inventoryItems);
  }

  /**
   * Count product on shopping carts
   * @returns
   */
  getNumberOfProductsInCart() {
    return cy.get(this.shoppingCartBadge);
  }

  /**
   * Add product to cart and get number of products on carts
   * @param product
   */
  addProductToCart(product: string) {
    let addToCartBtn: string;
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

    cy.get(addToCartBtn).click();
  }
}

export const homePage = new Home();
