import { test } from "@playwright/test";


test(`Learn CSS Selectors`, async ({ page }) => {


    await page.goto(`https://leaftaps.com/opentaps/control/main`);


    //await page.locator('[id="username"]').fill("democsr2"); Here [id="username"] === #username// 
    //await page.locator('#username').fill("democsr2"); // OPtion2


   // await page.locator('[class="inputLogin"]').nth(0).fill("democsr2"); // OPtion3


    await page.locator('[class="inputLogin"]').first().fill("democsr2"); // OPtion4    


    // await page.locator(`[id="password"]`).fill("crmsfa");
    // await page.locator('#password').fill("crmsfa"); // Option 2
  //  await page.locator('[class="inputLogin"]').nth(1).fill("crmsfa"); // Option 3


  await page.locator('[class="inputLogin"]').last().fill("crmsfa"); // OPtion4  


    // await page.locator('[class="decorativeSubmit"]').click();
    await page.locator('.decorativeSubmit').click(); // Option 2


    await page.waitForTimeout(3000); // For demo purpse


})