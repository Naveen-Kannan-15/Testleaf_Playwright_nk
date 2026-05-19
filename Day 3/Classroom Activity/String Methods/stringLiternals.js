// String Literal & Object Literal

let c = "testleaf"
let d = 'testleaf'

let e = new String("testleaf")
let f = new String('testleaf')

if (c === d){
    console.log("Success for String literal")
}else {
    console.log("Fail")
}
    
if (e === f) {
    console.log("Success for Object literal")
}else {
    console.log("Fail")
}