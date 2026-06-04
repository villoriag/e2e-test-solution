const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');
const { DetailPage } = require('../pages/DetailPage');
const { YourCartPage } = require('../pages/YourCartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { OverviewPage } = require('../pages/OverviewPage');
const { CompletionPage } = require('../pages/CompletionPage');

test('E2EPurchaseProduct', async ({ page }) => {
   const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login(
        'performance_glitch_user',
        'secret_sauce'
    );
    const productPage = new ProductPage(page);
    await productPage.goToProduct();
    const detailPage = new DetailPage(page);
    await detailPage.addProductToCart();
    await detailPage.goBackToProducts();
    const yourCartPage = new YourCartPage(page);
    await productPage.goTocart();
    await yourCartPage.clickCheckout();
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.completeCheckoutInformation();
    const overviewPage = new OverviewPage(page);
    await overviewPage.clickFinish();
    const completionPage = new CompletionPage(page);


});