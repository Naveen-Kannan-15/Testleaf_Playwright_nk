import { EmployeeSignUp } from "./accessModifiers.js";
class HR extends EmployeeSignUp {
    empUpdate() {
        // console.log(`The Employee Name is ${this.empName} and the salary is ${this.empSalary} and his contact number is ${this.empPhone}`)
        // this empSalary is still unavailable from the parent class since is it set to Private mode
        console.log(`The Employee Name is ${this.empName} and his contact number is ${this.empPhone}`);
        this.empPhone = 8925094070;
        console.log(`The Employee Name is ${this.empName} and his contact number is ${this.empPhone}`);
        console.log(EmployeeSignUp.empID);
        EmployeeSignUp.empID = 2925;
        console.log(EmployeeSignUp.empID);
    }
}
const hr = new HR();
hr.empDetails();
hr.empUpdate();
