// Some method

// Some method is also HOF.
// this method return a boolean value
// if at least one element passed the condition then return true else return false

// const numbers = [1,2,3,5];

// const hasEvenNumber = numbers.some((num)=>{
    // return num%2===0; //if reminder is 0 then return true
// })

// console.log(hasEvenNumber);

// const hasEvenNumberEvery = numbers.every((num)=>{
    // return num%2===0; //if reminder is 0 then return true
// })

// console.log(hasEvenNumber);
// console.log(hasEvenNumberEvery);


const students = [
    {id:1,name:'Ram',grade:75},
    {id:2,name:'Shyam',grade:50},
    {id:3,name:'Mohan',grade:65},
    {id:4,name:'Sohan',grade:85},
]

// student pass or not

const hasPassedStudents = students.some((student)=>{
    return student.grade > 60;
})

console.log(hasPassedStudents);