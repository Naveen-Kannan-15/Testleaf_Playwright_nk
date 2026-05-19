//Call Back Function
function add(k,l){
    let m = k+l
    funcSub(5,3)
    return m
}
function funcSub(n,o){
    let p = n - o
    console.log(p)
}
console.log("This is Call Back Function")
console.log(add(1,2))