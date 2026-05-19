import {test,chromium, firefox} from "@playwright/test"

test("Test to Launch Ms Edge", async () =>{ 

    const browser = await chromium.launch({channel:"msedge"})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.redbus.in ")
    let pageTitle = await page.title()
    console.log("The Title of the page is :", pageTitle)
    let pageUrl = page.url();
    console.log("The URL of the page is :", pageUrl)
    // await page.waitForTimeout(3000)
}
);

test("Test to launch firefox", async ()=>{
    const browser = await firefox.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.flipkart.com")
    let pageTitle = await page.title()
    console.log("The Title of the page is :", pageTitle)
    let pageUrl = page.url();
    console.log("The URL of the page is :", pageUrl)    
    // await page.waitForTimeout(3000)
}
)
