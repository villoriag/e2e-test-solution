const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');
const { DetailPage } = require('../pages/DetailPage');

test('Remove product from cart and continue shopping', async ({ page }) => {

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

    await detailPage.removeProduct();

    await detailPage.goBackToProducts();

    await expect(page).toHaveURL(/inventory\.html/);
});