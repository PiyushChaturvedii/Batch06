// Iterate Object using for in and for of loop, Object.keys

// const car={
//     name:"Tata",
//     model: "Nano",
//     year:2002
// }

// console.log(car);

//for in loop
// for (let key in car){
    // console.log(key," : ",car[key]); // inside array array[3]
// }

// Object keys
// console.log(Object.keys(car)); //returning an array
// console.log(Array.isArray(Object.keys(car)));



//for of loop
// console.log("using Object.keys For of loop");

// for (let key of Object.keys(car)){
//     // console.log(key);
//     console.log(key, " : ", car[key]);
    
// }

const array = [
    {name:'Mohan',age:22},
    {name:'Sohan',age:24},
    {name:'Rohan',age:26}
]

for(let obj of array){
    console.log(obj.name, " : ", obj.age);
}