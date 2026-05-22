import { test } from "@playwright/test";
test("Learn Alerts Handling", async ({ page }) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    page.on("dialog", async(alert)=>{
        console.log(`The type of alert is ${alert.type()}`)
        console.log(`The message inside the alert is ${alert.message()}`)
        await alert.accept()
    })
    // we have to switch to the frame inorder to click the Try it button
    const frame = page.frameLocator("#iframeResult")
    await frame.locator('//button[text()="Try it"]').click()
    const message = await frame.locator('[id="demo"]').textContent()
    console.log(message)
})