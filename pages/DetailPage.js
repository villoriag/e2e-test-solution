class DetailPage {
  constructor(page) {
    this.page = page;

    this.addToCartBtn = page.locator('#add-to-cart');
    this.removeBtn = page.locator('#remove');
    this.backToProductsBtn = page.locator('#back-to-products');
  }

  async addProductToCart() {
    await this.addToCartBtn.click();
  }

  async removeProduct() {
    await this.removeBtn.click();
  }

  async goBackToProducts() {
    await this.backToProductsBtn.click();
  }
}

module.exports = { DetailPage };