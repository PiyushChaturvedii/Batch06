// Arrays useful metjods

// indexOf
// includes
// slice
// join
//concat

// 0 base index
let fruits = ['banana', 'orange', 'apple', 'melon'];

// console.log(Array.isArray(fruits));
// console.log(fruits.length);

//indexOf - find the index of a specific element in array
let findApple = fruits.indexOf('apple');
console.log(findApple);

//includes - checks element present or not in array

let hasMelon = fruits.includes('melon') // true or false
console.log(hasMelon);

//slice - do partition of an Array into new array without modify original array

let sliceFruits = fruits.slice(1,3);
console.log(sliceFruits);
console.log(fruits);

//join - create a string by joining all elements of an array using specified separator
let joinedFruits = fruits.join(', ');
console.log(joinedFruits);

//concat method - allows merge arrays, creating new array without modify our original array.
let numbers = [12,12,15];
let mixedArray = fruits.concat(numbers);
console.log(mixedArray);
console.log(fruits);