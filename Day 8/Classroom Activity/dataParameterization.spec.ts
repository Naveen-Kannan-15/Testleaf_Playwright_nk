import { test } from "@playwright/test"
import loginData from "../../../Data/salesForceLogin.json"

test.describe.serial("Data Parameterization", async () => {
    for (let data of loginData) {
        test(`Data Parameterization ${data.testcaseid}`, async ({ page }) => {
            await page.goto("https://login.salesforce.com/?locale=in")
            await page.locator("#username").fill(data.username)
            await page.locator("#password").fill(data.password)
            await page.locator("#Login").click()
        })
    }
})