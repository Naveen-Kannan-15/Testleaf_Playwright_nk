import { test,expect } from "@playwright/test";
import path from "path";

test("Salesforce File Upload", async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForLoadState("domcontentloaded")
    await page.locator('[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('//p[text()="Accounts"]').click()
    await page.locator('[title="New"]').first().click()
    await page.locator('[name="Name"]').fill("Naveen Kannan")
    await page.locator('[aria-label="Type"]').first().click()
    await page.locator('//span[text()="Prospect"]').click()
    await page.locator('[aria-label="Industry"]').first().click()
    await page.locator('[title="Banking"]').click()
    await page.locator('[name="SaveEdit"]').click()
    await expect(page.locator('[class="forceVisualMessageQueue"]')).toContainText("was created")

    //File Upload
    const fileChooser = await page.waitForEvent("filechooser")
    await page.locator('[id="file-selector-label-1088"]').click()
    const fileUpload = await fileChooser
    await fileUpload.setFiles(path.join(__dirname,"../../../File Download 2/TestLeaf Logo.png"))
    await page.locator('//span[text()="Done"]').click()
    await expect(page.locator('//span[contains(text(),"added")]')).toBeVisible()
    console.log("File Uploaded Successfully")
})