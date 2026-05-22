import { test } from "@playwright/test";

test("Get count of Iframes in Leaftaps", async ({ page }) => {
    await page.goto("https://leafground.com/frame.xhtml")
    console.log("The count of the frames is: "+ page.frames().length) // To get the count of frames in the webpage
})

test("Print titles of the Iframes in Leaftaps", async ({ page }) => {
    await page.goto("https://leafground.com/frame.xhtml")
    const frames = page.frames()
    for(let i=0; i<frames.length; i++){
        console.log("The title of the frame "+ i + " is: " + await frames[i].title()) // To get the title of each frame in the webpage
    }
})