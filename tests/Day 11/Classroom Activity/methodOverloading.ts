class elementActions{
    click(element:string) : void
    click(element:string,forceClick:boolean) : void
    
    click(element:string,forceClick?:boolean){
        if(forceClick){
            console.log("Force Click is required")
        }
        else{
            console.log("Force Click is not required")
        }
    }
}

const eleObj = new elementActions
eleObj.click("#LoginButton") // Else Statement passes
eleObj.click("#LoginButton",true) // If Statement passes