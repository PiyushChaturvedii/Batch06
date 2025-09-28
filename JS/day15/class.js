// Class in JavaScript

// class provide a more convenient way to create objects and methods

// useful for achieve encapsulation, inheritance

//promote a more object orient approach

//reusable code

// class Person {
//     sayHello(){
//         console.log('Inside Class Hello funtion');
//     }
// }

// // create an instance of class
// const obj1 = new Person();

// obj1.sayHello();


class Person {

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // methods
    sayHello(){
        console.log(`${this.name} Hello! you are ${this.age} years old.`);
    }
}

// create an instance of class
const obj1 = new Person('Ram','22');
obj1.sayHello();
// create an instance of class
const obj2 = new Person('Sita','24');
obj2.sayHello();
// create an instance of class
const obj3 = new Person('Laxman','21');
obj3.sayHello();