// Foreach Method

// Higher order function
// when you dont need to manage index manually then use foreach
// foreach -> simpler syntax and cleaner code

const colors= ['red','green','yellow','blue']

colors.forEach(function(color){
    console.log(color);
})

const number = [1,2,3,4,5]

number.forEach((num,index)=>{
    // console.log('Num: ',num,', index: ',index);
    console.log(num*2);
    
})
// Foreach vs For
// when you need to work with index then use for loop
// when you dont need to manage index manually then use foreach
// foreach -> simpler syntax and cleaner code

// foreach vs Map
const values = [22,34,56,23]

// multiply with 3

const newvalues = values.map((val)=>{
    return val*3
})

console.log(newvalues);

values.forEach((val)=>console.log(val*3))

// Map -> create a new array without modify original array

// Map -> return that new array

// Foreach -> does not return anything
// So if you want to new array then use map otherwise use foreach

// when use foreach
// if you dont want to create another array or if you dont need to manage index manually

