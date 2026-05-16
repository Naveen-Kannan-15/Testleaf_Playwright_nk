import {test ,expect } from "@playwright/test";

test('Learn Asertions in playwright',async ({page}) => {
    
    await page.goto('https://leaftaps.com/opentaps/control/main');
    // const textBoxStatus = await (page.locator('#username')).isEditable()
    // await expect.soft(page.locator('#username')).toBeDisabled({timeout:8000}); // Locator based assertion// keyword for asserting a locator or value
    const title = await page.title() // This is the method to retreive the title of a page
    console.log(`The title of the page is ${title}`);
    expect.soft(title).toBe("Leaftaps - TestLeaf Automation Platform"); // Negative testing 
    await page.locator('#username').fill('democsr2',{timeout:5000}); // action timeout
    await page.locator('#password').fill('crmsfa')
    await page.waitForTimeout(3000)
    /* page.locator('#username') ==> locator
     */
})


/*
Conclusion:

Assertions Types :

1. Locator Assertions => auto retry assertions.
2. Generic Assertiosn => Non retry assertions.

For assertion the default timeout is 5000 ms tries 8 times
Timeout increaed by 8000 tries 11 times

Timeout :

Assertions Timeout : Modify timeout od specific assertions
Action TImeout : To Modify the timeout before performing an action like fill(),clikc()
*/