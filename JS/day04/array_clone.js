// Clone array

// primitive datatypes

// let num1 = 23
// let num2 = num1 // num2 = 23

// console.log(num1,num2);
// num1++; //num1 = num1 + 1;
// console.log(num1, num2);

//non-premitive (reference)

// let array1 = ['apple','banana','orange']; // 0x01
// let array2 = array1; // array 2 -> 0x01

// console.log(array1);
// console.log(array2);

// array1.push('melon');

// console.log(array1);
// console.log(array2);

//clone array

//slice method
let array1 = ['apple','banana','orange']; // 0x01
let array2 = array1.slice()

// console.log(array1);
// console.log(array2);

// array1.push('melon');

// console.log(array1);
// console.log(array2);

// spread Operator
let array3 = [...array1];

console.log(array1);
console.log(array2);
console.log(array3);

array1.push('melon');

console.log(array1);
console.log(array2);
console.log(array3);


// apptitute
// quiz
// hr - call || 1-20 Js,html,css
// 1 round - jr.developer
// 