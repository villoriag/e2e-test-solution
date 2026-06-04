const { expect } = require('@playwright/test');

class YourCartPage {
  constructor(page) {
    this.page = page;

    this.checkoutBtn = page.locator('#checkout');
    this.removeBtn = page.locator('#remove');
    this.continueShoppingBtn = page.locator('#continue-shopping');
  }

  async clickCheckout() {
    await expect(this.checkoutBtn).toBeVisible({ timeout: 10000 });
    await expect(this.checkoutBtn).toBeEnabled();

    await Promise.all([
      this.page.waitForURL(/checkout-step-one\.html/, { timeout: 15000 }),
      this.checkoutBtn.click(),
    ]);
  }

  async removeProduct() {
    await this.removeBtn.click();
  }

  async continueShopping() {
    await this.continueShoppingBtn.click();
  }
}

module.exports = { YourCartPage };