// @ts-check
const { test, expect } = require('@playwright/test');

test('index page renders correctly', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle("Ynda Jas");
  await expect(page.locator("h1")).toHaveText("Hello, world!");
  await expect(page.locator("h2")).toHaveText([
    "Current things",
    "Things that I'd like to be more current",
    "Sometimes things",
    "Things that once were",
    "Things that are trival"
  ]);
  await expect(page.locator("img")).toHaveCount(5);
  await expect(page.locator("footer p")).toHaveCount(2);
});

test('Nihongo page renders correctly', async ({ page }) => {
  await page.goto('/nihongo');

  await expect(page).toHaveTitle("Ynda Jas");
  await expect(page.locator("h1")).toHaveText("My Japanese language learning resources");
  await expect(page.locator("main p")).toHaveText("List to follow");
  await expect(page.locator("footer p")).toHaveCount(2);
});

test('writing page renders correctly', async ({ page }) => {
  await page.goto('/writing');

  await expect(page).toHaveTitle("Ynda Jas");
  await expect(page.locator("h1")).toHaveText("Things I've written");
  await expect(page.locator("main p")).toHaveText([
    "Links to writings elsewhere",
    "Blog posts"
  ]);
  await expect(page.locator("footer p")).toHaveCount(2);
});
