// Access Modifiers
export class EmployeeSignUp {
    empName;
    empSalary; // private keyword makes the empSalary not to be accessed outside the class
    empPhone; // protected keyword is also similar to the private keyword
    // protected key word yet allows the variable to be accessible to the derived class if any exists, 
    // that is, if this EmployeeSignUp class is derived and a child class is written with it, the empPhone is still available and accessible to the child class
    // but private variable are not accessible in the child class
    static empID;
    constructor() {
        this.empName = "Naveen";
        this.empSalary = "22.3 LPA";
        this.empPhone = 9843553470;
        EmployeeSignUp.empID = 2924;
    }
    empDetails() {
        console.log(`The Employee Name is ${this.empName} and the salary is ${this.empSalary} and his contact number is ${this.empPhone}`);
        console.log(`The Employee ID is: ${EmployeeSignUp.empID}`);
    }
}
const ESU = new EmployeeSignUp();
ESU.empDetails();
