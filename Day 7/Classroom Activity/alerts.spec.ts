// Alerts code by Ravindran

import { test } from "@playwright/test";

test("Learn to handle Alerts", async ({ page }) => {

    await page.goto("https://leafground.com/alert.xhtml");
    page.on("dialog", async (alert) => { // playwrigt listener 
        console.log(`The type of alert is ${alert.type()}`)// Return the type of alert => simple, confirm, prompt
        console.log(`The message inside the alert is ${alert.message()}`)

        if (alert.type() === 'confirm') {       
            await alert.dismiss()
        } else if (alert.type() === 'prompt') {
            await alert.accept("Naveen")
        } else {
            await alert.dismiss()
        }
    })

    await page.locator('//span[text()="Show"]').first().click();
    await page.waitForTimeout(3000); // demo purpose
    await page.locator(".card").filter({ hasText: "Alert (Confirm Dialog)" }).locator('//span[text()="Show"]').click();
    await page.waitForTimeout(3000); // demo purpose
    await page.locator(".card").filter({ hasText: " Alert (Prompt Dialog)" }).locator('//span[text()="Show"]').click();
    await page.waitForTimeout(3000); // demo purpose
    //Out of 3 "class=card" we are to filter it to a unique webement inorder to click the Show button
})