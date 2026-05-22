import { test } from "@playwright/test";

test("Learn to handle Alerts - Accept", async ({ page }) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    //find the Page Locator for the iframe and switch to it
    const frame = page.frameLocator("#iframeResult")
    page.on("dialog", async (alert)=>{
        console.log(`The type of alert is ${alert.type()}`)// Return the type of alert => simple, confirm, prompt
        console.log(`The message inside the alert is ${alert.message()}`)
        await alert.accept()
    })
    await frame.locator('[onclick="myFunction()"]').click()
    const demoText = await frame.locator("#demo").textContent()
    console.log("The Text after pressing the button is: " + demoText)
})

test("Learn to handle Alerts - Dismiss", async ({ page }) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    //find the Page Locator for the iframe and switch to it
    const frame = page.frameLocator("#iframeResult")
    page.on("dialog", async (alert)=>{
        console.log(`The type of alert is ${alert.type()}`)// Return the type of alert => simple, confirm, prompt
        console.log(`The message inside the alert is ${alert.message()}`)
        await alert.dismiss()
    })
    await frame.locator('[onclick="myFunction()"]').click()
    const demoText = await frame.locator("#demo").textContent()
    console.log("The Text after pressing the button is: " + demoText)
})