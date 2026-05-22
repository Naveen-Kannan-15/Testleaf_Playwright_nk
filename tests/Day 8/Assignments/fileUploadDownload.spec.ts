import { test,expect } from "@playwright/test";
import path from "path";

test.only("File Download", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download")
    const downloadPromise = page.waitForEvent("download")
    await page.locator('//a[text()="LambdaTest.txt"]').click()
    const downloadFile = await downloadPromise
    // await downloadFile.saveAs('File Download/TextDownloadFile.txt') // Downloading the file in a different name and storing it using Relative Path
    // await downloadFile.saveAs(path.join(__dirname,"../../../File Download/TextDownloadFile2.txt")) // Downloading the file in a different name and storing it using Absolute Path
    // await downloadFile.saveAs(`File Download/${downloadFile.suggestedFilename()}`) // Downloading the file in the same suggested name using Template Literal `${}` and storing it using Relative Path
    await downloadFile.saveAs(path.join(__dirname,`../../../File Download/${downloadFile.suggestedFilename()}`)) // Downloading the file in the same suggested name using Template Literal `${}` and storing it using Absolute Path
    console.log("The file has been successfully downloaded and stored in the right path")
})

test("File Upload with Input Tag", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload")
    const uploadFile = page.locator('[id="file-upload"]')
    const fileName = "OwnName.png"
    await uploadFile.setInputFiles('File Upload/OwnName.png') // Using Relative Path
    // await uploadFile.setInputFiles(path.join(__dirname,"../../../File Upload/OwnName2.png")) // Using Absolute Path
    console.log("Yes, the file is uploaded successfully")
})

test("File Upload without Input Tag", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload")
    const uploadPromise = page.waitForEvent("filechooser")
    await page.locator('[id="drag-drop-upload"]').click()
    const uploadFile = await uploadPromise
    const fileName = "Qeagle.jpeg"
    await uploadFile.setFiles('File Upload/Qeagle.jpeg') // Using Relative Path
    // await uploadFile.setFiles(path.join(__dirname,"../../../File Upload/TestLeaf.jpeg")) // Using Absolute Path
    // await uploadFile.setFiles([path.join(__dirname,"../../../File Upload/TestLeaf.jpeg"), path.join(__dirname,"../../../File Upload/Qeagle.jpeg")]) // Passing Array of Files using Absolute Path
    expect(await page.locator('[class="dz-filename"]').first().innerText()).toContain(fileName)
    console.log("Yes, the file is uploaded successfully")
})