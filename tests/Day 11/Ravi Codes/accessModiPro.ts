

// import { EmployeeSignUp  } from "../Ravi Codes/accessModi.js";


// class HR extends EmployeeSignUp { // child class


//    parentName : string


//     constructor(){
//         super()
//         this.parentName=this.eName
//         this.eName="Ravi"           
//     }



//     empUpdate(){
//         console.log(this.ephno) // protected ephno got accessed by the child class
//        // this.ephno=89898989
//         console.log(this.ephno);
        
//     }


//      printDetails(){ // method over riding
//      //   console.log(`The emp details ${this.eName} : ${this.eid} : ${this.ephno} : ${this.eSalary}`); // when we dont use static keyword for "eid"
//         console.log(`This is child class method emp details ${this.eName} : ${EmployeeSignUp.eid} : ${this.ephno}`);
//         super.printDetails() // parent method
//     //    console.log(this.parentName);
        
//     }


// }


// const objhr = new HR()
// objhr.empUpdate() // child class method
// objhr.printDetails() // parent class method