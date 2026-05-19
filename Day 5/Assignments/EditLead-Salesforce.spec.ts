// Edit Lead in the Sales Force Web Application

import { test,expect } from "@playwright/test";
test('Edit Leads in Salesforce', async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(3000) // wait for the page to get loaded
    await page.locator('button[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator("//p[text()='Sales']").click()
    await page.locator("//span[text()='Leads']").nth(0).click()
    await page.locator('(//a[@title="Naveen Kannan"])[1]').click()
    await page.locator("//button[text()='Edit']").click()
    await page.locator('[placeholder="Last Name"]').clear()
    await page.locator('[placeholder="Last Name"]').fill("Naveen")
    await page.locator('[name="Company"]').clear()
    await page.locator('[name="Company"]').fill("Qeagle")
    await page.locator('//button[@name="SaveEdit"]').click()
    await expect(page.locator("//span[contains(.,'was saved')]")).toBeVisible();
})