// Edit Individuals in the Sales Force Web Application

import { test,expect } from "@playwright/test";
test('Edit Individuals in Salesforce', async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForLoadState('domcontentloaded')
    await page.locator('button[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('//p[text()="Individuals"]').click()
    await page.locator('//span[text()="Kannan"]').first().click()
    await page.locator('//div[@title="Edit"]').click()
    await page.locator('//a[@class="select"]').nth(0).click()
    await page.locator('//a[@title="Mr."]').click()
    let firstName = "Naveen"
    await page.locator('//input[@placeholder="First Name"]').fill(firstName)
    let lastName = "Kannan"
    await page.locator('//input[@placeholder="Last Name"]').fill(lastName)
    await page.locator('//button[@title="Save"]').last().click()
    const fullName = firstName + " " + lastName
    await expect(page.locator("//span[contains(.,'was saved')]")).toBeVisible();
    await expect(page.locator('//span[text()="Created."]')).toBeVisible();
    await expect(page.locator(`//*[contains(@class,'uiOutputText') and contains(.,"${fullName}")]`)).toBeVisible()
})