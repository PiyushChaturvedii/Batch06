//.map() method

// higher order function
// produce a new array without modify original array
//if you want to or need apply function to each element then use map()

//Q1. Square array

const numbers = [1,2,3,4,5]

const newArray = numbers.map((num,index)=>{
    // console.log(index);
    return num*num;
})

console.log(newArray);

//Q2. Captial String
const fruits = ['apple','banana','orange']

const captialString = fruits.map((fruit)=>{
    return fruit.charAt(0).toUpperCase()+fruit.slice(1)
})

console.log(captialString);

//Q3. Extract Property

const users = [
    {id:1,name:'Ram',age:22},
    {id:2,name:'Shyam',age:23},
    {id:3,name:'Mohan',age:24},
    {id:4,name:'Sohan',age:25},
]

const usersName = users.map((user)=>{
    return user.name;
})

console.log(usersName);
console.log(Array.isArray(usersName));


//Q4. Covert temperture

const temp = [0,25,50,100];
const tempInFerenheit = temp.map((cel)=>{
    return (cel*9/5)+32;
})
console.log(tempInFerenheit);


//Q5. Double odd numbers
// if odd is coming then double up else discard

const allNumbers = [1,2,3,4,5,6,7,8,9,10]
const doubleOdd = allNumbers.map((num)=>{
    if(num%2==0){    //for even number
        return num;
    }else{         //odd
        return num*2;
    }
})


console.log(doubleOdd);