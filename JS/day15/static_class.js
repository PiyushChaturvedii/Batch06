// Static Method in Class

// Class in JavaScript

// class provide a more convenient way to create objects and methods

// useful for achieve encapsulation, inheritance

//promote a more object orient approach

//reusable code

// class Person {

//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     // methods
//     sayHello(){
//         console.log(`${this.name} Hello! you are ${this.age} years old.`);
//     }
// }
// // create an instance of class
// const obj1 = new Person('Ram','22');
// obj1.sayHello();

class MathOperation {
    static add(a,b){
        return a+b;
    }
    static multiply(a,b){
        return a*b;
    }

    //method
    addMethod(a,b){
        return a+b;
    }
}

// static method called on class itself
// dont need to create instance of the class

const sum = MathOperation.add(2,3);
console.log(sum);

const multi = MathOperation.multiply(3,4);
console.log(multi);
// const sum1 = MathOperation.addMethod(2,4);

const obj1 = new MathOperation();
console.log(obj1.addMethod(1,2));

const normalSum = obj1.addMethod(1,2);
console.log(normalSum);