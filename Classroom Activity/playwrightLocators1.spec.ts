import { test } from "@playwright/test";
test ('Learn Playwright Locators', async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale.in")
    await page.getByRole("textbox", {name:"Username"}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole("textbox", {name:"Password"}).fill("Testleaf@2025")
    await page.getByRole("button", {name:"Log in"}).click()
})