// Create an object
const obj= {
    name:'Ram',
    age: 23,
    "my hobbies": ['learning','swimming','cooking'] //variable has space
}

// dot vs bracket notation

//dot notation will not work with variable with space "my variable".

// console.log(obj['name']); //bracket notation
// console.log(obj.name); //dot notation


// console.log(obj.'my hobbies');  //error
// console.log(obj['my hobbies']); //It will work


//Add, Remove values in object

const car = {};

//add value in object
car.name= 'Toyota'
car.model= 'Camry'
car.year = 2002
car['color'] = 'Black'

console.log(car);

//remove values inside object
delete car.color
delete car['name']

console.log(car);
