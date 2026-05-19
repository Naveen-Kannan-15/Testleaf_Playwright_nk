import { test } from "@playwright/test";

test("Download file and save it in a desired location", async ({ page }) => {
    // Navigate to the page with the download link
    await page.goto("https://leafground.com/file.xhtml")
    let fdown = page.waitForEvent("download")
    await page.locator('[name="j_idt93:j_idt95"]').click();
    (await fdown).saveAs('File Upload/OwnName2.png')
})

test("Download file and save it in a desired location with suggested file name", async ({ page }) => {
    // Navigate to the page with the download link
    await page.goto("https://leafground.com/file.xhtml")
    let fdown = page.waitForEvent("download")
    await page.locator('[name="j_idt93:j_idt95"]').click();
    (await fdown).saveAs(`File Download/${(await fdown).suggestedFilename()}`)
})