
const { test, expect } = require('@playwright/test');

const username = 'standard_user';
const password = 'secret_sauce';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('TC01 - Valid login', async ({ page }) => {
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory.html/);
});

test('TC02 - Invalid password', async ({ page }) => {
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill('wrong_password');
  await page.locator('#login-button').click();

  await expect(page.locator('[data-test="error"]'))
    .toBeVisible();
});

test('TC03 - Locked out user', async ({ page }) => {
  await page.locator('#user-name').fill('locked_out_user');
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();

  await expect(page.locator('[data-test="error"]'))
    .toBeVisible();
});

test('TC04 - Product listing', async ({ page }) => {
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();

  await expect(page.locator('.inventory_item'))
    .toHaveCount(6);
});

test('TC05 - Sort price low to high', async ({ page }) => {
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();

  await page.locator('[data-test="product-sort-container"]')
    .selectOption('lohi');

  const prices = await page.locator('.inventory_item_price')
    .allTextContents();

  const values = prices.map(p => Number(p.replace('$', '')));

  expect(values).toEqual([...values].sort((a, b) => a - b));
});

test('TC06 - Add product to cart', async ({ page }) => {
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click();

  await expect(page.locator('.shopping_cart_badge'))
    .toHaveText('1');
});

test('TC07 - Remove product from cart', async ({ page }) => {
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click();

  await page.locator('.shopping_cart_link').click();

  await page.locator('[data-test="remove-sauce-labs-backpack"]')
    .click();

  await expect(page.locator('.cart_item')).toHaveCount(0);
});

test('TC08 - Complete checkout', async ({ page }) => {
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click();

  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('Test');
  await page.locator('[data-test="lastName"]').fill('User');
  await page.locator('[data-test="postalCode"]').fill('400001');

  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');
});
