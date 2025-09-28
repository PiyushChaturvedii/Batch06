// Bind Method

// bind method return a new function(create a new func)
//call and apply do not return function

// function myGreet(hobby){
//     console.log(`My name is ${this.name} and hobby is ${hobby}`);
// }

const user1 = {
    name:'Ram',
    age:21,
    greet:function(hobby){
        console.log(`My name is ${this.name} and hobby is ${hobby}`);
    }
}

const user2 = {
    name: "Shyam",
    age: 26
}

// bind method create a new function
// const myBind = myGreet.bind(user1,'Chess')
// myBind();

const myBind = user1.greet.bind(user1,'Chess')
myBind()


// call takes individual arguments
// myGreet.call(user1,'Chess')

const user2Greet = user1.greet.bind(user2,'Cricket')() //IIFE

// const user2Greet = user1.greet.bind(user2,'Cricket')

// user2Greet()

user1.greet.call(user2,'Chess')
// apply takes arguments as an array
// myGreet.apply(user1,['Chess'])
user1.greet.apply(user2,['Swimming'])