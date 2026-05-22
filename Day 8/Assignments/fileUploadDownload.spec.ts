import { test,expect } from "@playwright/test";
import path from "path";

test("File Download", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download")
    const downloadPromise = page.waitForEvent("download")
    await page.locator('//a[text()="file.json"]').click()
    const fileDownload = await downloadPromise
    await fileDownload.saveAs('File Download 2/TestDownload.json') // Assertion and uploading file is still pending
})