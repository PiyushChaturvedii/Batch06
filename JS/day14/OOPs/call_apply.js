// Call Apply Method

//call takes individual arguments
// apply takes arguments as an array

function myNewFun(hobby,food){
   console.log(`My name is ${this.name} and age is ${this.age}. My hobby is ${hobby} and my favourite food is ${food}`);  
}

const user1 = {
    name:'ram',
    age:23,
    sayHello: function(hobby,food){
        console.log(`My name is ${this.name} and age is ${this.age}. My hobby is ${hobby} and my favourite food is ${food}`);
    }
}

const user2 = {
    name: 'shyam',
    age: 26
}

const user3 = {
    name: 'sita',
    age: 16
}

// how to call sayHello method for user2 without creating method in user2

// call method takes as 1st arguments as a refernce and after that arguments

user1.sayHello('Cricket','Burger')
user1.sayHello.call(user2,'Tennis',"Pizza")

//call method use when outside declared function
myNewFun.call(user3,'Badminton','Pasta')


// Apply method
// takes an arguments with an Array

console.log("Using Apply Method");
user1.sayHello.apply(user2,['Baseball','HotDog'])