import { test,expect } from "@playwright/test";
test('Learn Storage State', async ({page,context}) => {
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("naveenkannan1501@gmail.com")
    await page.locator("#password").fill("Timesup@15")
    await page.locator("#Login").click()
    await page.waitForLoadState('domcontentloaded')
    await page.locator('button[title="App Launcher"]').click()
    await context.storageState({path: "Data/salesForceLogin.json"}) // this line helps the code to store the cookies data from the browser during the run time
})