import { test,expect } from "@playwright/test";
import path from "path";

test("Salesforce File Upload", async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForLoadState("domcontentloaded")
    await page.locator('[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').waitFor()
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
    console.log("The Account is created")

    //File Upload
    const uploadPromise = page.waitForEvent("filechooser")
    await page.locator('//span[text()="Upload Files"]').waitFor()
    await page.locator('//span[text()="Upload Files"]').click()
    const uploadFile = await uploadPromise
    await uploadFile.setFiles(path.join(__dirname,"../../../File Upload/OwnName.png"))
    await page.locator('//span[text()="Done"]').click()
    await expect(page.locator('//span[contains(text(),"was added")]')).toBeVisible()
    console.log("File Uploaded Successfully")
})