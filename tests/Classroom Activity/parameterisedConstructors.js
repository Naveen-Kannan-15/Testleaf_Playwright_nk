"use strict";
// Normal Class with Properties and Methods
class LoginUrl {
    // Properties
    browser = 'Chrome';
    url = "https://leaftaps.com/crmsfa/control/main";
    // Methods
    launch() {
        console.log(this.browser);
    }
    loadUrl() {
        console.log(this.url);
    }
}
const LU = new LoginUrl();
LU.launch();
LU.loadUrl();
/* OUTPUT:

Chrome
https://leaftaps.com/crmsfa/control/main */
// Parameterised Constructors (Properties initialised within a constructor)
class LoginUrl1 {
    // Properties are declared globally
    browser;
    url;
    // Methods
    launch() {
        console.log(this.browser);
    }
    loadUrl() {
        console.log(this.url);
    }
    constructor() {
        this.browser = 'Chrome';
        this.url = "https://leaftaps.com/crmsfa/control/main";
    }
}
const LU1 = new LoginUrl1();
LU1.launch();
LU1.loadUrl();
