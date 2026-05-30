// Constructor

class construct1 {
    
    login(){
        console.log("Click the login button")
    }
    constructor(constr:string){
        console.log(`I am a Constructor`) // Constructors are called first
    }
}

const lopojb1 = new construct1("edge")
lopojb1.login()

/* OUTPUT:

I am a Constructor
Click the login button */

// Parameterized Constructor & Parameterized Method

class construct2 {
    
    login(button:string){
        console.log(`Click the login button ${button}`)
    }
    constructor(constr:string){
        console.log(`I am a ${constr} Constructor`)
    }
}


const lopojb3 = new construct2("edge")
lopojb3.login("Click Me")

/*OUTPUT:

I am a edge Constructor
Click the login button */