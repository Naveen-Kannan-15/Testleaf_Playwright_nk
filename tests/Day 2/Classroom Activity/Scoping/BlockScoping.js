if(true){
    var msg = "Hello Var"
    console.log(msg) // declared inside the block gets printed
}
console.log(msg) // declared outside the block also gets printed

if(true){
    let msg = "Hello Let"
    console.log(msg) // declared inside the block gets printed
}
console.log(msg) // declared outside the block is not printed

if(true){
    const msg = "Hello Const"
    console.log(msg) // declared inside the block gets printed
}
console.log(msg) // declared outside the block is not printed

