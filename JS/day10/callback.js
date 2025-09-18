// Callback Function

// function passed as an argument to another function

// handle async task like fetching data from server or perform any operation
// flexible of function, allow to custom action to be executed in specific point

// function greet(name,callback){
//     console.log(`Hello! ${name}`);
//     callback();
// }

// function sayGoodBye(){
//     console.log(`Good Bye`);
// }

// greet('Ram',sayGoodBye);

function processArray(arr,multiplier,callback){
    for(let i=0; i<arr.length;i++){
        callback(arr[i]*multiplier) //print all values inside array using logValue function
    }
}

function logValue(value){
    console.log(value);
}


const number = [1,2,3,4,5,6]
const multiplier = 3;
 processArray(number,multiplier,logValue);


