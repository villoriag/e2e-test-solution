const { expect } = require('@playwright/test');
class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.zipCodeInput = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
  }

  async completeCheckoutInformation() {
   
    
    await this.firstNameInput.fill('Gabi');
    await this.lastNameInput.fill('Villoria');
    await this.zipCodeInput.fill('1001');
    await this.continueBtn.click();
  }
}

module.exports = { CheckoutPage };