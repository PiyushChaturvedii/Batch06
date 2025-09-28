// Sets in JavaScript

// store only unique values

// if any duplicate present then sets remove

// why sets
// when working with database with uniqueness then sets is useful

let mySet = new Set([1,2,3,4,5,5,4,4]);

console.log(mySet);

// add and delete element

mySet.add(6);
mySet.add(8);
mySet.add(10);
console.log("After Add: ",mySet);


// delete element

mySet.delete(10)
console.log("After Delete 10: ", mySet);

// check element present or not - has

// has return boolean value true or false

console.log(mySet.has(11));


for(let num of mySet){
    console.log(num);
}