// More array Methods

// .find()
// .reverse()
// .fill()
// .splice()

//1. find() => if find satisfy result then return value otherwise return undefined

// const users = [
//     {id:1,name:'Ram'},
//     {id:2,name:'Shyam'},
//     {id:3,name:'Mohan'},
// ]

// find user with id === 2

// const foundUser = users.find((user)=>user.id===2);

// console.log(foundUser);

// 2. reverse() => reverse the array

// const numbers = [1,2,3,4,5];
// console.log('Numbers: ',numbers);
// numbers.reverse();

// console.log('Numbers after reverse: ',numbers);

//3. fill() => fill the all elements of an array with specific value

// const newArray = [1,2,3,4,5,6,7]

// newArray.fill(0);

// value, start, endIndex-1
// newArray.fill(0,1,6)

// console.log(newArray);

//4. splice()-> method use to change content of array by removing or replace items

const fruits = ['apple','banana','orange','grapes','cherry']

//remove banana from the array and add kiwi
// start, end, insert args

// const removedFruit = fruits.splice(1,2,'kiwi','watermelon')

// console.log(removedFruit);

// console.log(fruits);

//remove banana 1
const removedBanana = fruits.splice(1,1,'apple2')

console.log(removedBanana);
console.log(fruits);