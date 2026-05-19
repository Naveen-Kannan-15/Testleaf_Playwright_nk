// Launch a Browser and login to the leaftaps application and display lead in the lead page

import { test } from "@playwright/test";
test ('Create Lead - Leaftaps', async ({page}) => {
    await page.goto("https://leaftaps.com/opentaps/control/login")
    await page.locator("#username").fill("democsr2")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator('//a[contains(text(),"CRM")]').click()
    await page.locator('[name="query"]').fill("12403")
    await page.locator('//button[text()="Search"]').click()
    await page.locator('//a[text()="Naveen"]').click()
    await page.locator('//a[text()="Edit"]').click()
    await page.locator("#updateLeadForm_lastName").fill("Kumar")
    await page.locator(".smallSubmit").first().click()
    await page.waitForTimeout(6000)
})