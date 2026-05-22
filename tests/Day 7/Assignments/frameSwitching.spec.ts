import { test, expect } from "@playwright/test";

test("Learn Frame Switching using Playwright", async ({ page }) => {
    await page.goto("https://dev304842.service-now.com/login.do")
    await page.locator("#user_name").fill("admin")
    await page.locator("#user_password").fill("T3REAv8g@lo@")
    await page.locator("#sysverb_login").click()

    await page.locator('[aria-label="All"]').click()
    await page.locator("#filter").waitFor() // waitFor is added to make the code wait for the page to be loaded
    await page.locator("#filter").fill("Service Catalog")
    await page.locator('text=Service Catalog').first().waitFor()
    await page.keyboard.press("Enter")

    const frame1 = page.frameLocator('[name="gsft_main"]')
    await frame1.locator('//h2[contains(text(),"Mobiles")]').click()
    await frame1.locator('//strong[text()="Apple iPhone 13"]').click()
    await frame1.locator('//label[text()="No"]').click()
    await frame1.locator('[id="IO:33494b069747011021983d1e6253af45"]').selectOption({value:"500MB"})

    const MDAdropdown = frame1.locator('//select[@id="IO:33494b069747011021983d1e6253af45"]/option')
    const MDAdropdownCount = await MDAdropdown.count()
    for (let index = 0; index < MDAdropdownCount; index++) {
        console.log("The value is : ", await MDAdropdown.nth(index).innerText())   
    }

    await frame1.locator('//label[text()="Starlight"]').click()
    await expect(frame1.locator('//input[@value="starlight"]')).toBeEnabled()
    console.log("The Starlight Colour is selected")

    await frame1.locator('//label[text()="256 GB [add $100.00]"]').click()
    await expect(frame1.locator('//input[@value="256"]')).toBeEnabled()

    await frame1.getByRole("button",{name: "Order Now"}).click()

    const status = frame1.locator('//span[contains(text(),"submitted")]')
    const statusText = await frame1.locator('//span[contains(text(),"submitted")]').innerText()
    await expect(status).toContainText("submitted")
    console.log("The status of the order is:", statusText)
    console.log("The Title of the page is:", await page.title())
    console.log("The URL of the page is :", page.url())
})