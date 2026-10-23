// import { test as baseTest } from "@playwright/test"; // alias name for test
// import { LoginPage } from "../pages/01-login";
// import { WelcomePage } from "../pages/02-welcomePage";
// import { HomePage } from "../pages/03-homePage";
// import { CreateLeadPage } from "../pages/05-createLeadPage";
// import { LeadPage } from "../pages/04-leadPage";
// import { ViewLeadPage } from "../pages/06-viewLeadPage";

type myFixtures = {// typealias 

    loginfix: LoginPage
    wpfix: WelcomePage
    hpfix: HomePage
    clpfix : CreateLeadPage
    lpfix :  LeadPage
    vpfix : ViewLeadPage

}

export const testobj = baseTest.extend<myFixtures>({    // baseTest here is an alias name of test

    //key : value
    loginfix: async ({ page }, use) => {
        const loginobj = new LoginPage(page)
        await use(loginobj) // setting of the custom fixture ends here
    },

    wpfix: async ({ page }, use) => {
        const wp = new WelcomePage(page)
        await use(wp) // setting of the custom fixture ends here
    },

    hpfix: async ({ page }, use) => {
        const hp = new HomePage(page)
        await use(hp) // setting of the custom fixture ends here
    },

    lpfix: async ({ page }, use) => {
        const lp = new LeadPage(page)
        await use(lp) // setting of the custom fixture ends here
    },

    clpfix: async ({ page }, use) => {
        const clp = new CreateLeadPage(page)
        await use(clp) // setting of the custom fixture ends here
    },

    vpfix: async ({ page }, use) => {
        const vp = new ViewLeadPage(page)
        await use(vp) // setting of the custom fixture ends here
    }
    // testobj => page fixture + readily available objects
})

// const hp = new HomePage(page)
// const lp = new LeadPage(page)
// const clp = new CreateLeadPage(page)
// const vp = new ViewLeadPage(page)