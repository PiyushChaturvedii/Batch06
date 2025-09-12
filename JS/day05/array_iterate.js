//Iterate thorugh arrays using for and for_of loop

let names = ["mohan","sohan","rohan",'sunita','vinita'];

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

let len = names.length;
console.log("Length of array : ",len);

for(let i =0; i < names.length;i++){
    console.log(names[i]);
}

//for of loop
console.log("Iterate array using for of loop");
for(let name of names){
    console.log(name);
}