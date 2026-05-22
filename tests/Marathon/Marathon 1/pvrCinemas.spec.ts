import { test,expect } from "@playwright/test";

test("Automate PVR Cinemas using Playwright", async ({page}) => {
    await page.goto("https://www.pvrcinemas.com/")  
    await page.locator('//span[text()="Cinema"]').click()
    await page.locator('//span[text()="Select Cinema"]').click()
    await page.locator('//span[text()="PVR, Grand Mall, Velachery"]').click()
    await page.locator('//span[contains(text(),"Tomorrow")]').click()
    await page.locator('//ul[@role="listbox"]/li').first().click()
    await page.locator('//li[@class="p-dropdown-item"]/span').first().click()
    await page.locator('[aria-label="Submit"]').click()
    await page.locator('//button[text()="Accept"]').click()
    await page.locator('//span[text()="1"]').nth(5).click()
    await page.locator('//span[text()="2"]').nth(5).click()
    const seat1 = "F1"
    const seat2 = "F2"
    expect(await page.locator('//div[@class="seat-number"]/p').first().innerText()).toEqual(seat2)
    expect(await page.locator('//div[@class="seat-number"]/p').last().innerText()).toEqual(seat1)
    const grandTotal = await page.locator('//div[@class="grand-prices"]/h6').innerText()
    expect(grandTotal).toBeDefined()
    expect(await page.title()).toContain("PVR Cinemas")
    await page.locator('//button[text()="Proceed"]').click()
    await page.screenshot()
})