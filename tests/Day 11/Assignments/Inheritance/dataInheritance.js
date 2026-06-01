"use strict";
class TestData {
    enterCredentials() {
        console.log("Entering the credentials");
    }
    navigateToHomePage() {
        console.log("Navigating to the home page");
    }
}
class LogintestData extends TestData {
    enterUserName() {
        console.log("Entering the Username");
    }
    enterPassword() {
        console.log("Entering the Password");
    }
}
const loginObj = new LogintestData;
loginObj.enterCredentials();
loginObj.enterUserName();
loginObj.enterPassword();
loginObj.navigateToHomePage();
