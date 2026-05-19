const {test, expect} = require('@playwright/test');

test('Home Page', async ({page})=>{

	await page.goto('https://chatgpt.com/');

	const title = await page.title();
		console.log('The Title is: ', title);
		// await expect(page).toHaveTitle('ChatGPT');

	const URL = await page.url();
		console.log('The URL is: ', URL);
		// await expect(page).toHaveURL('https://chatgpt.com/');

	await page.close();
}
)