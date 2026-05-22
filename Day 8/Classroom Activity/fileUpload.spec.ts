import { test } from "@playwright/test";
import path from "path";

// With Input Tag
test("Upload a file through Advanced Upload with input tag", async ({ page }) => {
    await page.goto("https://leafground.com/file.xhtml")
    const chooseButton = page.locator('[id="j_idt97:j_idt98_input"]')
    await chooseButton.setInputFiles([path.join(__dirname,"../../../File Upload/Qeagle.jpeg"), path.join(__dirname,"../../../File Upload/TestLeaf.jpeg")])
})

// Without Input Tag
test.only("Upload a file through Advanced Upload without input tag", async ({ page }) => {
    await page.goto("https://leafground.com/file.xhtml")
    const chooseButton2 = page.waitForEvent("filechooser")
    await page.locator('//span[text()="Choose"]').first().click()
    const fileChooser = await chooseButton2
    await fileChooser.setFiles(path.join(__dirname,"../../../File Download 2/TestLeaf Logo.png"))
})