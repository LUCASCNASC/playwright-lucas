// @ts-check
const { test, expect } = require('@playwright/test');

//redimensionar a página com essas especificações
// test.use({
//   viewport: {width: 1600, height: 1200},
// });

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
})

test('Login com sucesso @login', async ({ page }) => {

  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()

  // const button = await page.getByRole('button', { name: 'Send Mail'})
  // await button.scrollIntoViewIfNeeded()
  // await button.click()

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com.br');
  await page.screenshot({ path: 'screenshot/screenshot1.png'})
  await page.locator('#password').click();
  await page.locator('#password').fill('lucas123');
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png'})
  await page.screenshot({ path: 'screenshot/screenshot2.png'})
  await page.getByRole('button', { name: 'login' }).click();
});

test('Login com sucesso 1 @login', async ({ page }) => {
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com.br');
  await page.screenshot({ path: 'screenshot/screenshot1.png'})
  await page.locator('#password').click();
  await page.locator('#password').fill('lucas123');
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png'})
  await page.screenshot({ path: 'screenshot/screenshot2.png'})
  await page.getByRole('button', { name: 'login' }).click();
});

test('Login com sucesso 2', async ({ page }) => {
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com.br');
  await page.screenshot({ path: 'screenshot/screenshot1.png'})
  await page.locator('#password').click();
  await page.locator('#password').fill('lucas123');
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png'})
  await page.screenshot({ path: 'screenshot/screenshot2.png'})
  await page.getByRole('button', { name: 'login' }).click();
});

test.afterEach(async ({ page }) => {
  
})