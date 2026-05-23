// /* Typescript Datatypes :


// 1. number
// 2. string
// 3. boolean.
// 4. undefined
// 5. null 
// 6. any
// 7. unknown
// 8. tuple*/



// //Nature of   typescript is static typing


// //If I need to convert the nature of typescript to javascript


// //any datatype when infered helps the variable to store any kind of datatype while a value os being assigned to it


// // let a :any = 123;
// // a="Hi"



// // let b : any = "Hello Team"; // loosely typed ==> JS
// //let b : string = "Hello Team"; // strictly typed ==> Typescript



// let b : unknown = "Hello Team"; // Mildly strict



// if(typeof b ==="string"){


//     console.log(b.toUpperCase());
    


// }
// //console.log(b.toUpperCase());



// /* Step1 : Compile .ts file using the command tsc filename.ts
// Step2 : Execute the file that got produced after compilation using the command node filename.js */








// function logData(data: unknown) {


//     if (typeof data === "string") {
//         console.log(data.toUpperCase());
//     }else{
//         console.log(data+"Different datatype");
        
//     }
// }


// //If you use any, someone can pass:


// logData(123);



// //Tuple is typescript way handling array in JS :


// let arrayVal : [string,number,boolean,string] = ["Playwright",2026,true,"AprilPW"]