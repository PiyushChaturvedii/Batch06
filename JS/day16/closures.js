// Closures in JavaScript

// What is closures
// functions that return function (function inside function)
// combination of a function and thire lexical environment withing which that function we declared

// Why need closures?
// Data Encapsulation - hide complex logic data privacy
// Private Variables - create private variables and access withing function

// Ex1: Data Encapsulation and Private Variables inside closures

// function createCouter() {
//   let counter = 0;
//   return function () {
//     // counter++;
//     counter+=5
//     console.log(counter);
//   };
// }

// const counter = createCouter();
// // console.log(counter);
// counter(); // call inner function
// counter();
// counter();


//ex2

// function multiplier(factor){
//     return function(x){
//         // console.log(x, factor);
//         return x*factor;
//     }
// }

// const double = multiplier(2);
// console.log(double(5));

// const triple = multiplier(3);
// console.log(triple(5));

// Closures Interview Based Questions

// 1 - What is closures and provide example of pratical use?


// closure is combination of function and its lexical enviroment
// allow the function to access variables from its outer function

// 2 - How can closures be used to create private variables in JaVaScript?

