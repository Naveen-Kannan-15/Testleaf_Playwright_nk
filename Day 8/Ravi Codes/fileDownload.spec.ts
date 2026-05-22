// import { test } from "@playwright/test";
// import path from "path";


// test("Learn to handle download button",async ({page}) => {

//     await page.goto("https://leafground.com/file.xhtml");
//     const filePromise = page.waitForEvent("download") // Here we are asking playwright to listen to the downloaded file action
//     await page.locator('//span[text()="Download"]').click();
//     const fDown = await filePromise // resolving the download action after click action
//     //Here fDown captures the file after it gets downloaded
//     //   await fDown.saveAs('Data/PWApr26.png'); // Relative Path
//     //Absolute Path
//     // await fDown.saveAs(path.join(__dirname,"../../Data/Absolute.png"))
//     //Exact filename while we download
//     await fDown.saveAs(path.join(__dirname,`../../Data/${fDown.suggestedFilename()}`)) // Testleaf
//     //__dirname=> Day8 (current folder where the .spec.ts file is present)
//     /* 
//     ../ => control moves from current folder to tests
//     ../ => control moves from tests to root directory (PW-JS-APR-26)
    
//     */
//     await page.waitForTimeout(3000) 
// })