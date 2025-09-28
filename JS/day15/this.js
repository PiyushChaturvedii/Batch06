// this keyword in arrow functions

// behaviour of this keyword in arrow function and regular function

//global scope.
function myRegularFunc(){
    console.log(`${this.name} - ${this .age}`)
}

//arrow function do not have their own context
const myArrowFunc = () =>[
    console.log(`${this.name} - ${this .age}`)
]

const user1 = {
    name: 'Ram',
    age:24,
    myMethod: myRegularFunc,
    myArrowMethod: myArrowFunc
}

user1.myMethod();
user1.myArrowMethod();