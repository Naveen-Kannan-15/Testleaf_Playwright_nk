"use strict";
class Polymorphism {
    reportStep(msg, status, snap) {
        if (snap) {
            console.log(`Message: ${msg}, Status: ${status}, Snapshot: ${snap}`);
        }
        else {
            console.log(`Message: ${msg}, Status: ${status}`);
        }
    }
}
const polyObj = new Polymorphism();
polyObj.reportStep("Test case passed", "success");
polyObj.reportStep("Test case failed", "error", true);
