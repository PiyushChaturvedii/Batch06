// // __proto__prototype

// const obj1={
//     title: 'JavaScript',
//     name:'Ram'
// }

// const obj2 = Object.create(obj1) //provide reference of obj1

// obj2.age = 24;


// console.log(obj2);


// console.log(obj2.__proto__);

// prototype

// attach with function
// access or provide free space to use

// this prototype attached with only function
// function + object

function myFunc(){
    console.log('Hello Function');
}

myFunc();

myFunc.prototype.title='JavaScript';

myFunc()
console.log(myFunc);
console.log(myFunc.prototype);

myFunc.prototype.protoFunc = () =>{
    console.log('Jai Shree Ram');
}
console.log(myFunc);

myFunc.prototype.protoFunc();