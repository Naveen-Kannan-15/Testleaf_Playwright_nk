"use strict";
// Base Class
class WebComponent {
    selector;
    constructor(selector) {
        this.selector = selector;
    }
    click() {
        console.log(`Clicked on component with selector: ${this.selector}`);
    }
    focus() {
        console.log(`Focused on component with selector: ${this.selector}`);
    }
}
// Derived Class - Button
class Button extends WebComponent {
    click() {
        super.click();
        console.log(`Button-specific action executed for: ${this.selector}`);
    }
}
// Derived Class - TextInput
class TextInput extends WebComponent {
    value = "";
    enterText(text) {
        this.value = text;
        console.log(`Entered text "${this.value}" into input: ${this.selector}`);
    }
}
// Test Function
function testComponents() {
    // Create instances
    const loginButton = new Button("#loginBtn");
    const usernameInput = new TextInput("#username");
    // Simulate actions
    loginButton.focus();
    loginButton.click();
    usernameInput.focus();
    usernameInput.enterText("Naveen");
}
// Execute test
testComponents();
