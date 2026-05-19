const {test, expect} =require('@playwright/test');

test('Home page',async ({page})=>{
	
	await page.goto('https://chatgpt.com/');

	const pageURL = page.url();
		console.log('Page URL is:' ,pageURL);
		await expect(page).toHaveURL('https://chatgpt.com/');
		await page.close();
})