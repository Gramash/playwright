import { test, expect } from '@playwright/test';
import { PATHS } from '../src/service/io'

PATHS.forEach(async path => {
  test(`path test ${path.path}`, async ({ page }) => {
    const response = await page.goto(path.path);
    expect(response?.status()).toBe(200)
  })
});

test('test 500', async ({page}) => {
    const response = await page.goto('https://the-internet.herokuapp.com/status_codes/500');
    expect(response?.status()).toBe(500);
});





