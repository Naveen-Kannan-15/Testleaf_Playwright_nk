import { test,expect } from "@playwright/test";
test("Interact with Iframe in Leaftaps", async ({ page }) => {
    await page.goto("https://leafground.com/frame.xhtml")
    const frame1ref = page.frameLocator('[src="default.xhtml"]')
    await frame1ref.locator('[id="Click"]').click() // To click the button in the first frame
    const buttonText1 = await frame1ref.locator('[id="Click"]').textContent() // To get the text of the button after clicking in the first frame
    console.log("The text within the first frame is: " + buttonText1)
    expect(await frame1ref.locator('[id="Click"]').textContent()).toBe("Hurray! You Clicked Me.") // To verify the button text after clicking
    const frameCount = page.frames().length
    console.log("The count of the frames is: "+ frameCount) // To get the count of frames in the webpage
    const frame2ref = page.frameLocator('[src="page.xhtml"]')
    const frame3ref = frame2ref.frameLocator('[src="framebutton.xhtml"]')
    await frame3ref.locator('[id="Click"]').click() // To click the button in the nested frame
    const buttonText2 = await frame3ref.locator('[id="Click"]').innerText() // To get the text of the button after clicking in the nested frame
    expect(await frame3ref.locator('[id="Click"]').innerText()).toBe("Hurray! You Clicked Me.") // To verify the button text after clicking
    console.log("The text within the nested frame is: " + buttonText2)
})