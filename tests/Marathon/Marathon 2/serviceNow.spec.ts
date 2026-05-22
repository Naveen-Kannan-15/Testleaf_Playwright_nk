import { test, expect } from "@playwright/test";
import creds from "../../../Data/serviceNowLogin.json"

test("Automate Service Now Application Using Playwright", async ({page}) => {
    await page.goto(creds.url)
    await page.locator("#user_name").fill(creds.username)
    await page.locator("#user_password").fill(creds.password)
    await page.locator("#sysverb_login").click()
    page.waitForEvent("domcontentloaded")

    await page.locator('[aria-label="All"]').click()
    await page.locator('[aria-label="All"]').waitFor()
    await page.locator('[class="label"]').nth(3).click()
    
    const iframe = page.frameLocator('[id="gsft_main"]')
    await iframe.locator('//h2[contains(text(),"Mobiles")]').click()
    await iframe.locator('//strong[contains(text(),"Apple iPhone 13 pro")]').click()
    await iframe.locator('//label[text()="Yes"]').click()
    await iframe.locator('[id="IO:4afecf4e9747011021983d1e6253af34"]').fill("99")
    await iframe.locator('//select[@name="IO:ff1f478e9747011021983d1e6253af68"]').selectOption({label:"Unlimited [add $4.00]"})
    await iframe.locator('//label[text()="Sierra Blue"]').click()
    await iframe.locator('//label[text()="512 GB [add $300.00]"]').click()
    await iframe.locator('//button[text()="Order Now"]').click()
    await expect(iframe.locator('//span[contains(text(),"submitted")]')).toBeVisible()
    console.log("The Order has been successfully submitted")
    await page.screenshot()
})