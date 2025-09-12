// Array Destructure

//extract values from an array

const array = ['banana', 'orange', 'apple', 'grapes','mango','watermelon' ];

//basic array destructure
let [val1,val2,val3,val4] = array;

// console.log(val1,val2,val3,val4);
// console.log(typeof val1);

// skip some values with rest destructure

let [a,b,...rest]=array;
console.log(a,b,rest);
console.log(typeof rest);
console.log(Array.isArray(rest));
console.log(typeof a, a);


