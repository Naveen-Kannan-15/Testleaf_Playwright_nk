export class EmployeeSignUp {
    eName;
    static eid;
    ephno;
    eSalary;
    constructor() {
        this.eName = "Hari";
        EmployeeSignUp.eid = "eid1234";
        this.ephno = 789798789;
        this.eSalary = 45454;
    }
    printDetails() {
        //   console.log(`The emp details ${this.eName} : ${this.eid} : ${this.ephno} : ${this.eSalary}`); // when we dont use static keyword for "eid"
        console.log(`The emp details ${this.eName} : ${EmployeeSignUp.eid} : ${this.ephno} : ${this.eSalary}`);
    }
}
const empObj = new EmployeeSignUp();
empObj.printDetails();
/* Note :


1. Here private and protected variables are not exposed outside of the class
2. Whereas protected can be accessed by the derived class(child class)*/ 
