// Code to find even or odd number within a specified number range (1 to 50)

function isOddorEven(){

    for (let n = 1; n <= 50; n++){
    if (n % 2 === 0){
        console.log("This number " + n + " is Even")
    }else {
        console.log("This numnber " + n + " is Odd")
    }
    }
}
isOddorEven()