// Function Scope vs Block Scope

//var from function Scope
//let, const from block scope


//Function Scope

function myFunc(){
    if(true){
        var name = 'ram';
        console.log(name);
    }
    console.log(name); //access name variable here due to funtion scope
}

myFunc();

//Block Scope

function myFunc1(){
    if(true){
        let greet = 'Hi';
        const name = 'shayam'
        console.log(greet);
        console.log(name);
    }
    console.log(greet);
    
}

myFunc1()