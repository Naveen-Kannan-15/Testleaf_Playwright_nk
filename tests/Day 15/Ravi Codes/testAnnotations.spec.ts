import { expect, test } from "@playwright/test";

test.describe.serial("Test annotation",async () => { // grouping of test scripts

test.skip(`Test annotation with skip is used when he environment is not ready`, async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill("democsr2");
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await page.locator('//input[@class="decorativeSubmit"]').click();
    await page.locator('//a[contains(text(),"CRM")]').click();
    await page.waitForTimeout(3000)
})

test.fixme(`Test annotation fixme is to convey there is an issue in the script `, async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill("democsr2");
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await page.locator('//input[@class="decorativeSubmit"]').click();
    await page.locator('//a[contains(text(),"CRM")]').click();
    await page.waitForTimeout(3000)
})

test.fail("Test annotation fail", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill("democsr2");
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await page.locator('//input[@class="decorativeSubmit"]').click();
    //Actual state of button is enabled but  the expected nature of button is disable
    expect(page.locator('//input[@class="decorativeSubmit"]')).toBeDisabled() //negative testing
    await page.locator('//a[contains(text(),"CRM")]').click();
    await page.waitForTimeout(3000)
})
})

/* When the test execution is passed means expectation not met that is button not disbaled yet
 When the test execution is failed means expectation is met that is button is disbaled*/