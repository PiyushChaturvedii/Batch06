//Function returns functions

// function createAdder(x) {
//     console.log("x: ",x);
//   return function (y) {
//     //anonymous function
//     console.log("y: ",y);
//     return x + y;
//   };
// }


// const add1 = createAdder(5);

// console.log(add1(4));

// console.log(createAdder(5)(7));


function createCounter(){
    let count = 0;

    return function(){
        count = count + 2;
        return count;
    }
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());




