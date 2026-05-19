console.log("Equality - Strict")
console.log("----------------")
console.log(1===1) // true
console.log(1===2) // false
console.log(1===true) // false
console.log(true===1) // false
console.log("----------------")

console.log("Equality - Non Strict")
console.log("----------------")
console.log(1==1) // true
console.log(2==1) // false
console.log(1=="2") // false
console.log(1=="1") // true
console.log(1==true) // true
console.log(true==1) // true
console.log(false==1) // false
console.log(false==0) // true
console.log("games"==1) // false
console.log("1"==1) // true
console.log("----------------")