// Merge the leads created in the TestLeaf application

import { test, expect } from '@playwright/test';

test("Merge Leads in TestLeaf Application", async ({ page,context }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demosalesmanager") // Enter the user name
    await page.locator("#password").fill("crmsfa") // Enter the password
    await page.locator(".decorativeSubmit").click() // Click on login button
    await page.locator('//a[contains(text(),"CRM")]').click() // Click on CRM/SFA button
    await page.locator('//a[text()="Leads"]').click() // Click on Leads button
    await page.locator('//a[text()="Merge Leads"]').click()

    const pagePopup1 = context.waitForEvent("page")
    await page.locator('[src="/images/fieldlookup.gif"]').first().click()
    const pagePopup2 = await pagePopup1
    await page.waitForLoadState("domcontentloaded")
    await pagePopup2.locator('[class="x-grid3-cell-inner x-grid3-col-partyId"]').first().waitFor()
    await pagePopup2.locator('[class="x-grid3-cell-inner x-grid3-col-partyId"]').first().click() // This is not getting selected in the leads field
    
    const pagePopup3 = context.waitForEvent("page") // This line is not working properly 
    await page.locator('[src="/images/fieldlookup.gif"]').first().click()
    const pagePopup4 = await pagePopup3
    await page.waitForLoadState("domcontentloaded")
    await pagePopup4.locator('[class="x-grid3-cell-inner x-grid3-col-partyId"]').nth(1).waitFor()
    await pagePopup4.locator('[class="x-grid3-cell-inner x-grid3-col-partyId"]').nth(1).click()
    
    await page.waitForTimeout(3000)

    await page.locator('//a[text()="Merge"]').click()
    console.log("The Leads are merged successfully")

    // console.log("The title of the page is : ", await page.title())
})