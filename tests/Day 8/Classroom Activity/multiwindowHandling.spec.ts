import { test } from "@playwright/test";
test("Handling multiple windows", async ({ page }) => {
    await page.goto("https://leafground.com/window.xhtml")
    await page.getByText("Open Multiple").click()
    await page.waitForLoadState("domcontentloaded")
    const allPages = page.context().pages()
    console.log(allPages.length)
    for (let i = 0; i < allPages.length; i++) {
        await page.waitForLoadState("domcontentloaded")
        console.log(await allPages[i].title())
    }
})