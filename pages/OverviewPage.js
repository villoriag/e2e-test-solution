const { expect } = require('@playwright/test');
class OverviewPage {
  constructor(page) {
    this.page = page;
    this.finishBtn = page.locator('#finish');
  }
  async clickFinish() {
    await expect(this.finishBtn).toBeVisible({ timeout: 10000 });
    await expect(this.finishBtn).toBeEnabled();

    await this.finishBtn.scrollIntoViewIfNeeded();
    await Promise.all([
      this.page.waitForURL(/checkout-complete\.html/, { timeout: 15000 }),
      this.finishBtn.click(),
    ]);
  }
}
   
module.exports = { OverviewPage };