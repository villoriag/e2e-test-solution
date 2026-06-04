const { expect } = require('@playwright/test'); 
class ProductPage {
    constructor(page) {
        this.page = page;
        this.product = page.locator('#item_3_title_link');
        this.cart = page.locator('#shopping_cart_container');
    }

    async goToProduct() {
        await this.product.click();
    }
    async goTocart() {
    await this.cart.click();
}
}

module.exports = { ProductPage };