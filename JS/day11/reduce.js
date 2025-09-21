// Reduce Method

// HOF
// aggragate the elements of an array into single value
// finding sum, maximum number, minimum number
// provide new array without modify original array

// Q1. Sum all numbers

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((acc,curr)=>{
        console.log("acc: ",acc,"  curr: ",curr);

    acc = acc + curr;
    return acc;
},0)

// 1st 
// acc:0 curr=1
// acc = acc + curr = 1

// 2nd
// acc:1, curr=2
// acc = 3

// 3rd 
// acc=3, curr = 3
// acc = 6

// 4th
// acc=6, curr=4
// acc = 10

// 5th
// acc=10, curr=5
// acc=15

console.log("Sum of All number: ", sum);

// Q2. finding maximum values
const values = [10,4,20,33,45,23];

const maxValue = values.reduce((acc,curr)=>{
        console.log("acc: ",acc,"  curr: ",curr);

    return Math.max(acc,curr)
},0)


console.log("Maximum value of Values array: ",maxValue);


// Q3. Find minimum value inside an array

const array1 = [10,20,30,1,34]

const minValue = array1.reduce((acc,curr)=>{
    console.log("acc: ",acc,"  curr: ",curr);
    return Math.min(acc,curr);
},10000)

console.log("Minmum value of array1 array: ",minValue);