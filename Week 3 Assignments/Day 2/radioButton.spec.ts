// Handle Radio Button in Playwright
import { expect, test } from "@playwright/test";

test("Handle Radio Button in Playwright", async ({ page }) => {
    await page.goto("https://www.leafground.com/radio.xhtml")
    await expect(page.getByRole("radio",{name:"Safari"}).last()).toBeChecked()
    await page.getByText("Edge").first().click()
    await expect(page.getByText("Edge").first()).toBeChecked()
    await page.getByText("Chennai",{exact:true}).click()
    await expect(page.getByLabel("Chennai",{exact:true})).toBeChecked()
    await page.getByText("1-20 Years",{exact:true}).click()
    await expect(page.getByLabel("21-40 Years",{exact:true})).not.toBeChecked()
})