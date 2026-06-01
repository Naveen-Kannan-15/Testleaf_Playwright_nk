class Modifiers{
    public empName : string
    static empID : number
    private empSalary : number
    readonly empJoiningDate : number
    protected empDepartment : string

    constructor(){
        this.empName = "Naveen"
        Modifiers.empID = 2924
        this.empDepartment = "Mechanical"
        this.empJoiningDate = 15012001
        this.empSalary = 1500000
    }

    empDetails(){
        console.log(`The name of the Employee working at ${this.empDepartment} Department is ${this.empName} with employee id as ${Modifiers.empID} who has joined by the date ${this.empJoiningDate} (DDMMYYYY) receives a Salary package of ${this.empSalary} per annum.`)
    }

    public get empSalaryDetails(){ // eventhough it is similar to a method, but it is not a method yet a property
        return this.empSalary
    }

    public set empSalaryUpdate(newSalary : number){
        this.empSalary = newSalary
    }
}
const mObj = new Modifiers
mObj.empDetails()
console.log(`The Salary is ${mObj.empSalaryDetails}`) // Getter Method gets the Private salary to be available outside the class
mObj.empSalaryUpdate = 1600000 // setter method sets the Salary to a new value
console.log(`The Updated Salary is ${mObj.empSalaryDetails}`) // Again by calling the getter method to get the updated value of the salary