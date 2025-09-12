// Spread Operator (...)

// clone or copy array
// const originalArray = [11,22,33];
// const copiedArray = [...originalArray]; //copy original's value to copied array
// console.log(copiedArray);
// originalArray.push(44)
// console.log(originalArray);


//merge arrays
// const arr1 = [10,20,30]
// const arr2 = [40,50,60]
// const arr3 = [70,80,90]

// const mergedArray = [...arr1,...arr2,...arr3]
// console.log(mergedArray);

//adding element
// const arr1 = [10,20,30];

// const newArray = [...arr1,76,78,79];
// console.log(newArray);

// Object

//copy object
// const originalObj = {name:'Raju',age:30};
// const copiedObj = {...originalObj}
// console.log(copiedObj);
//merge object
const obj1 = {name: 'Ram'};
const obj2 = {age: 30};
const mergedObj = {...obj1,...obj2}
console.log(mergedObj);
//add properties inside obj
console.log("\n After Adding Property in Objects:\n");
const updateObj = {...mergedObj,gender:'male',hobbies:['coding','cooking','swimming']}

console.log(updateObj);