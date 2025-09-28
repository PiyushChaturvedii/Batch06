// Inheirtance in JS

// inheit property from parent class to child class

// it helps to code reduce and organization structure of out code

class Animal{
    constructor(name){
        this.name = name
    }
    makeSound(){
        console.log('Some Sounds');
        // console.log(this.name);
    }
    aboutMe(){
        console.log(`I am in Animal Class and my name is ${this.name}`);
    }
}

//Method Overriding - Two methods present in both class then child class method called

class Dog extends Animal{
    makeSound(){
        console.log('dog Sound');
    }
}


// Super keyword use to fetch methods of parent class when methods name is same

class Cat extends Animal{
    makeSound(){
        super.makeSound()
        console.log('Cat Sound');
    }
}

const dog = new Dog('Tyson');

dog.makeSound();
dog.aboutMe();

const myCat = new Cat('MyCatName');
myCat.makeSound();