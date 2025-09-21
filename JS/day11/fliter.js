// Filter Method

// if we want to extract all primenumbers from the arrays

// produce a new array without modify original array


// Q1. Filter even numbers

const numbers = [1,2,3,4,5,6,7,8,9];

function isEven(num){
    return num%2===0;
}

const evenNumbers = numbers.filter((num)=>{
    return isEven(num)
})

// const evenNumbers = numbers.filter((num)=>{
//     if(num%2==0){
//         return num
//     }
// })

// const evenNumbers = numbers.filter(num=>num%2===0)

console.log(evenNumbers);

// Q2. Filter string longer than 5 characters

// const words = ['apple','banana','cherry','orange'];

// const newWords = words.filter((word)=>{
//     return word.length>5
// })

// console.log(newWords);

//Q3. filter users name those age is greater than 18
users = [
    {id:1,name:'Ram',age:21},
    {id:2,name:'Shyam',age:12},
    {id:3,name:'Mohan',age:18},
    {id:4,name:'Sohan',age:19},
    {id:5,name:'Rohan',age:25},
]

const userName = users.filter((user)=>{
    if(user.age>18) return user.name
})

console.log(userName);

// Q4. Filter prime numbers.

const allValues = [1,2,3,4,5,6,7,8,9]

const primNums = allValues.filter(isPrime)

function isPrime(num){
    for(let i=2;i<num;i++){
        if(num%i===0) return false;
    }
    return num>1;
}

console.log(primNums);