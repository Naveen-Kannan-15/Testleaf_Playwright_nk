import { test } from "@playwright/test";

test("Learning to handle windows", async ({ page, context }) => {

    await page.goto("https://www.flipkart.com/"); // One particular Context 
    const searchBox = page.locator('[placeholder="Search for Products, Brands and More"]').first();
    await searchBox.fill("Phone");
    await searchBox.press("Enter");
    const pagePromise = context.waitForEvent("page"); // "pagePromise" contains the unresolved promise returned by waitForEvent()
    await page.locator('//div[text()="Kechaoda A27"]').first().click();
    const childPage = await pagePromise; // "childPage" holds the reference of the newly opened page
    console.log(await childPage.title());
    console.log(await page.title());
})