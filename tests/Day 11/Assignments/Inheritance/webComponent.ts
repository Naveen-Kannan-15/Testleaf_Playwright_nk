// Base Class
class WebComponent {
    selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    click(): void {
        console.log(`Clicked on component with selector: ${this.selector}`);
    }

    focus(): void {
        console.log(`Focused on component with selector: ${this.selector}`);
    }
}

// Derived Class - Button
class Button extends WebComponent {
    override click(): void {
        super.click();
        console.log(`Button-specific action executed for: ${this.selector}`);
    }
}

// Derived Class - TextInput
class TextInput extends WebComponent {
    value: string = "";

    enterText(text: string): void {
        this.value = text;
        console.log(`Entered text "${this.value}" into input: ${this.selector}`);
    }
}

// Test Function
function testComponents(): void {
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