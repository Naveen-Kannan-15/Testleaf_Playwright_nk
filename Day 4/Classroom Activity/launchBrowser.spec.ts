/* Browser => Chrome, Firefox, Webkit
BrowserContext === Window => Isolated Environment and Incognito mode 
Page => amazon.com, flipkart*/


import {test,chromium} from "@playwright/test"

test("Test to Launch a Browser", async () =>{ // page fixture

const browser = await chromium.launch(); //=> Step1
const context = await browser.newContext();// => Step2
const page = await context.newPage(); // Step 3

await page.goto("https://leaftaps.com/opentaps/control/main");

await page.waitForTimeout(3000); // Note for demo purpose only
}
);


/* await returns Promise :
Which has 3 stages :
1. Pending
2. Resolve
3. Reject */


/* Week1- JS is Asynchronous



 
 */

/* const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://example.com');
})(); */