//Parameters Destructring


const user = {
    name: 'ram',
    age: 24,
    country: 'India'
}

// const {name,age,country} = user

// console.log(name, age);

//using object destructuring
function myFunc({name,age,country}){
    console.log(`Name: ${name}`);
    console.log(`Age:`, age);
    console.log(`Country: ${country}`);   
}

myFunc(user)

//Using array destructuring in function parameters

function arrayDestruc([x,y]){
 console.log(`X Cordinate: ${x}`);
 console.log(`Y Cordinate: ${y}`);
 
}

const cordinates = [20,30]
// const [x,y] = cordinates;

// console.log(x,y);

arrayDestruc(cordinates)