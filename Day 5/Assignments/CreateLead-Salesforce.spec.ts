// Create Lead in the Sales Force Web Application

import { test,expect } from "@playwright/test";
test('Create Leads in Salesforce', async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(3000)
    await page.locator('button[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator("//p[text()='Sales']").click()
    await page.locator("//span[text()='Leads']").nth(0).click()
    await page.locator("//div[text()='New']").click() // X path method
    // await page.locator("div[title='New']").click(); // CSS method
    await page.locator('[aria-label="Salutation"]').nth(0).click()
    await page.locator('[data-value="Mr."]').nth(0).click()
    let name = "Naveen"
    await page.locator('[placeholder="First Name"]').fill(name)
    let Lname = "Kannan"
    await page.locator('[placeholder="Last Name"]').fill(Lname)
    await page.locator('//input[@name="Company"]').fill("SalesForce")
    await page.locator('//button[@name="SaveEdit"]').click()
    await expect(page.locator("//span[contains(.,'was created')]")).toBeVisible(); //text () is replaced with "." since . indicator will search for inner texts, combined texts, and visible texts also instead of just direct texts.
})