function life() {
    let a = 13
    var b = 13
    const c = a + b
    console.log("The Sum is",c)
    console.log(a) // Gets printed since it is inside the function
    console.log(b) // Gets printed since it is inside the function
    console.log(c) // Gets printed since it is inside the function
}
life()
// console.log(a) // Let will not be printed since it is function scoped
// console.log(b) // Var will not be printed since it is also function scoped
// console.log(c) // Const wiil not be printed since it is also function scoped