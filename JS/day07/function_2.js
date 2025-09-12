//Different ways to define a function

//1. Funtion declaration (traditional way)

// function greet(name){
//     // console.log(`Hello ${name}`);
//     return `Hello ${name}!`
// }

// const gr = greet('Ram')
// console.log(gr);

// 2. Function Expressions

// const greet = function(name){
//     console.log(`Hello ${name}`);
// }

// greet('Ram')

//3. Arrow functions ES6 (2015)
// const greet = (name)=>{
//     console.log(`Hello ${name}`);
// }
// greet('Ram');

//4. IIFE Immediatly invoked function expression

(function (name){
    console.log(`Hello ${name}`);
    // return `Hello ${name}!`
})('Mohan')