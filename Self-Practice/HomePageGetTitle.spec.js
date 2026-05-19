const {test, expect} =require('@playwright/test'); 

test('Home page',async ({page})=>{
	
	await page.goto('https://www.office.com/');

	const pageTitle = await page.title();
		console.log('Page title is:' ,pageTitle);
		await page.close();
})	