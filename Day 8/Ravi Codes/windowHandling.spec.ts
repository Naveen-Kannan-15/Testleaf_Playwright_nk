// import { test } from "@playwright/test";

// test(`Learning to handle windows`, async ({ page, context }) => {

//     await page.goto("https://www.flipkart.com/"); // One particular Context 
//     const searchBox = page.locator('[placeholder="Search for Products, Brands and More"]').first();
//     await searchBox.fill("Phone");
//     await searchBox.press("Enter");
//     // const pagePromise = context.waitForEvent("page"); // "pagePromise" contains the unresolved promise returned by waitForEvent()
//     // await page.locator('//div[text()="Kechaoda A27"]').first().click();
//     // const childPage = await pagePromise; // "childPage" holds the reference of the newly opened page
//     // Promise.all() => it is a method used to resolve 2 unresolved promised
//     //Concurrent Approach : 
//     //  const childPage = await Promise.all([context.waitForEvent("page"), page.locator('//div[text()="IQOO Z11x 5G (Prismatic Green, 128 GB)"]').first().click()])
//     //Array Destructuring
//     const [childPage] = await Promise.all([context.waitForEvent("page"), page.locator('//div[text()="IQOO Z11x 5G (Prismatic Green, 128 GB)"]').first().click()])
//     await childPage.waitForLoadState("domcontentloaded");// playwright waits until the DOM gets loaded before it interacts further with the elements in DOM
//     console.log(await childPage.title());
//     console.log(await page.title());
//     await page.bringToFront(); // brings the parent page to front to view it
//     await page.locator('//span[text()="Electronics"]').click();
//     await childPage.bringToFront()
//     await page.waitForTimeout(3000) // DEMO
// })

// test("Handle Mutiple windows", async ({ page, context }) => {

//     await page.goto("https://leafground.com/window.xhtml");
//     await Promise.all([context.waitForEvent("page"), page.locator('//span[text()="Open Multiple"]').click()])
//     // context => holds all the multiple pages
//     const allPages = context.pages() // mutilple pages => Parent, ChildPage1, ChildPage2
//     await page.waitForLoadState("domcontentloaded");
//     console.log(await allPages[0].title()) // Parent Page
//     console.log(await allPages[1].title()) // ChildPage1
//     allPages[1].bringToFront()
//     console.log(await allPages[2].title()) // ChildPage2
//     //  await page.locator('//span[text()="Open Multiple"]').click();
//     await page.waitForTimeout(3000)
// })