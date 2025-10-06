// console.log(this);
// console.log(firstname);
// var firstname = 'Ram';
// console.log(firstname);
// // console.log(myFunction());
// myFunction();

// function myFunction(){
//     console.log("Inside funtion.");
// }

// myFunction();

// console.log(myFuc);
// function myFuc(){
//     console.log('Function is here');
// }

// var myfuncExpression = function(){
//     console.log('Function Expression called');
// }
// console.log(myfuncExpression);

// Scope Chain

let title = "JavaScript Course";
// console.log(title);

let Desc = 'JS Desc'
let a = 10;
function myFunc(){
    let Desc = 'JS Desc inside function'
    console.log(title);
    console.log(Desc);
    let a = 20;
    function innerFunction(){
        let a = 30;
        console.log(a);
    }
    innerFunction();
}




myFunc();