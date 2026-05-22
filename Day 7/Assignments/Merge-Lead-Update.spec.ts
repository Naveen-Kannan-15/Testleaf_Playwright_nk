// Merge the leads created in the TestLeaf application

import { test, expect } from '@playwright/test';

test("Merge Leads in TestLeaf Application", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demosalesmanager") // Enter the user name
    await page.locator("#password").fill("crmsfa") // Enter the password
    await page.locator(".decorativeSubmit").click() // Click on login button
    await page.locator('//a[contains(text(),"CRM")]').click() // Click on CRM/SFA button
    await page.locator('//a[text()="Leads"]').click() // Click on Leads button
    await page.locator('//a[text()="Merge Leads"]').click()

    const pagePopup1 = page.waitForEvent("popup")
    await page.locator('[src="/images/fieldlookup.gif"]').first().click()
    const pagePopup2 = await pagePopup1
    await pagePopup2.locator('[class="x-grid3-cell-inner x-grid3-col-partyId"]').first().click()
    
    console.log("First Lead is selected")
    await page.waitForLoadState("domcontentloaded")
    const pagePopup3 = page.waitForEvent("popup")
    await page.locator('[src="/images/fieldlookup.gif"]').last().click()
    const pagePopup4 = await pagePopup1
    await pagePopup4.locator('[class="x-grid3-cell-inner x-grid3-col-partyId"]').nth(1).click()
    await page.waitForTimeout(3000)

    await page.locator('//a[text()="Merge"]').click()
    console.log("The Leads are merged successfully")

    // console.log("The title of the page is : ", await page.title())
})