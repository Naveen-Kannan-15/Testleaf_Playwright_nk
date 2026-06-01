// class ElementActions{


//     //Method overloading


// // click(element:string){
// //     console.log(Normal click ${element});    


// // }


// // IN TYPESCRIPT WE WILL HAVE METHOD SIGNATURE 


// click(element:string):void 
// click(element:string,forceClick:boolean) : void


// //SINGLE METHOD IMPLEMENTION OFR 2 ACTIONS TO BE PERFORMED


// click(element:string,forceClick?:boolean){ // Here ? means optional


//     if (forceClick) { // forceClick === true


//          console.log(`Force click ${element}`); 
//     } else {


//          console.log(`Normal click ${element}`); 
//     }
//     }




// }


// const objaction = new ElementActions()


// //objaction.click("#LogibButton") // For method 1
// objaction.click("#LoginButton",true) // For method 2