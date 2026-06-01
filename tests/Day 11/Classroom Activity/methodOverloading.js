"use strict";
class elementActions {
    click(element, forceClick) {
        if (forceClick) {
            console.log("Force Click is required");
        }
        else {
            console.log("Force Click is not required");
        }
    }
}
const eleObj = new elementActions;
eleObj.click("#LoginButton");
eleObj.click("#LoginButton", true);
