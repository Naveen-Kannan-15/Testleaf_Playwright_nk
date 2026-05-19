// Slice Array is used to extract a part of the array without modifying the orginal array

let names = ["mohan", "karthik", 'manoj', "kishore"]
let names2 = names.slice(1,2)
console.log(names2) // karthik is printed since this name is in the 1st index and the end index -1 is again index 1

let names3 = names.slice(0,2)
console.log(names3) // prints mohan and karthik