// Create Individuals in the Sales Force Web Application

import { test,expect } from "@playwright/test";
test('Create Individuals in Salesforce', async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForLoadState('domcontentloaded')
    await page.locator('button[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('//p[text()="Individuals"]').click()
    await page.locator("a:has-text('Individuals List')").click()
    await page.locator('//span[text()="New Individual"]').click()
    await page.locator('//a[@class="select"]').nth(0).click()
    await page.locator('//a[@title="Mr."]').click()
    let LastName = "Kannan"
    await page.locator('//input[@placeholder="Last Name"]').fill(LastName)
    await page.locator('//span[text()="Save"]').click()
    // await expect(page.locator(`//span[contains(.,"${LastName}")]`)).toBeVisible()
    await expect(page.locator("//span[contains(.,'was created')]")).toBeVisible()
    await expect(page.locator(`//*[contains(@class,'uiOutputText') and contains(.,"${LastName}")]`)).toBeVisible()
    await expect(page.locator('//span[text()="Created."]')).toBeVisible()
    // await expect(page.locator('//span[text()="Mr.  Kannan"]')).toBeVisible()
})