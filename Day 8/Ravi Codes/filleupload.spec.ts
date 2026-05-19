// /* Notes:
// FileUpload is of 2 types:
// 1. With input tag and type="file" => Earlier
// 2. Without input tag and without type="file" => Modern REACT based applications*/

// import { test } from "@playwright/test";
// import path from "path";

// //Method-1 - Learn to Upload the file with input tag and type=file

// test("Learn to Upload the file with input tag and type=file", async ({ page }) => {

//     await page.goto("https://the-internet.herokuapp.com/upload");
//     const uploadFile = page.locator('[id="file-upload"]'); // reference of the locator to upload/ inject the file to the locator
//     uploadFile.setInputFiles(path.join(__dirname, '../../Data/Absolute.png'));
//     await page.waitForTimeout(3000);
// })

// //Method-2 Without the input tag and type="file"

// test("Upload file - Without the input tag and type='file'", async ({ page }) => {

//     await page.goto("https://the-internet.herokuapp.com/upload");
//     const filePromise = page.waitForEvent("filechooser"); // filePromise is a variable that holds an unresolved promise
//     await page.locator('[id="drag-drop-upload"]').click();
//     const fileUpload = await filePromise
//     await fileUpload.setFiles([path.join(_dirname,"../../Data/Absolute.png"),path.join(_dirname,"../../Data/TestLeaf Logo.png")],);
//     await page.waitForTimeout(3000)
// })