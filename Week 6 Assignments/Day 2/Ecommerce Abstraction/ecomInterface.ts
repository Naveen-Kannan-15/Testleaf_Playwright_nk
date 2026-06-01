export interface PageRules{
    verifyPage() : void
}

export abstract class BasePage{
    waitForPageLoad(){
        console.log("Wait for the Page to load")
    }
    getPageTitle(){
        console.log("Getting page title")
    }
}