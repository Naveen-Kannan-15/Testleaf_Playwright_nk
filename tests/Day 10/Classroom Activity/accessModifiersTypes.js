"use strict";
class Modifiers {
    empName;
    static empID;
    empSalary;
    empJoiningDate;
    empDepartment;
    constructor() {
        this.empName = "Naveen";
        Modifiers.empID = 2924;
        this.empDepartment = "Mechanical";
        this.empJoiningDate = 15012001;
        this.empSalary = 1500000;
    }
    empDetails() {
        console.log(`The name of the Employee working at ${this.empDepartment} Department is ${this.empName} with employee id as ${Modifiers.empID} who has joined by the date ${this.empJoiningDate} (DDMMYYYY) receives a Salary package of ${this.empSalary} per annum.`);
    }
    get empSalaryDetails() {
        return this.empSalary;
    }
    set empSalaryUpdate(newSalary) {
        this.empSalary = newSalary;
    }
}
const mObj = new Modifiers;
mObj.empDetails();
console.log(`The Salary is ${mObj.empSalaryDetails}`);
mObj.empSalaryUpdate = 1600000;
console.log(`The Updated Salary is ${mObj.empSalaryDetails}`);
