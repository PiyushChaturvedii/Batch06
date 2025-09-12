//slice method
let arr1 = ['banana','apple','orange']
let arr3 = arr1
console.log(arr1 === arr3);   //both arrays has same address
// let arr2 = arr1.slice()

//spread Operator
// let arr2 = [...arr1]

//using Array.from()
// let arr2 = Array.from(arr1);

//concat method
let arr2 = arr1.concat([]);

console.log(arr1);
console.log(arr2);

arr1.push('grapes')

console.log(arr1);
console.log(arr2);

//false => two arrays are independent(clone) their refernce in different
console.log(arr1===arr2);
