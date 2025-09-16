// Lexical Scope

// const num = 30;
// function outer(){

//     // const num = 20;

//     function inner(){
//         // const num = 10;
//         console.log(num); //inner function num
//     }
//     inner();
// }

// outer();

let num1= 20; //global enviornment
function outer(){
    console.log(num1);

    const num2 = 40;
    function inner(){
        // if num2 is present in inner function or not
        // if present that print value
        //else find the variable within that lexical environment
        const num2 = 10;
        console.log(num2);
    }
    inner()
}

outer()