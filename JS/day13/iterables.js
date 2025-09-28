// Iterables

// we can apply loop (for of)

// array, string

//array
const numbers = [1,2,3,4,5]

for(let num of numbers){
    console.log(num);
}

const str1 = 'Javascript'

for (let ch of str1){
    console.log(ch);
}

// number is not iterable


const num1 = 123
for(let num of num1){
    console.log(num);
}