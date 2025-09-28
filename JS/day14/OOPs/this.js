// this keyword

// console.log(this);
// console.log(window);
// console.log(this===window);

// if we not provide any name with func that called anonymous funtion

// this keyword refer to current execution context

// methods - if we call or create a function inside object so that will become method

function myInfo(){
    console.log(`My name is ${this.name} and age is ${this.age}`);
}

const person1 = {
    name:'ram',
    age:23,
    // info:function(){
    //     console.log(`My name is ${this.name} and age is ${this.age}`);
    info:myInfo
}

const person2 = {
    name:'shyam',
    age:26,
    // info:function(){
    //     console.log(`My name is ${this.name} and age is ${this.age}`);
    // }
    info:myInfo
}

const person3 = {
    name:'mohan',
    age:20,
    // info:function(){
    //     console.log(`My name is ${this.name} and age is ${this.age}`);
    // }
    info:myInfo
}

person1.info()
person2.info()
person3.info()

