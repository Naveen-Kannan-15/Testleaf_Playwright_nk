// Odd or even using named function and looping statements

function isOddorEven(){
for (let a = 0; a <= 50; a++){
    if (a % 2 !== 0){
        console.log("The given number is even", a)
    }else {
        console.log("The given number is odd", a)
    }
}
}
isOddorEven()