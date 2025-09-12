let names = ["mohan","sohan","rohan",'sunita','vinita'];

console.log("Using For in Loop");

//for(let name of names) // name gives directly value in arrays
for(let name in names){
    // console.log(name);// give indexes
    console.log(names[name]);
}

console.log('Using while loop');


let i = 0;
while (i<names.length){
    console.log(names[i]);
    i++;
}

// we have two arrays and make another array and push all values of array1 with uppercase

const array1 = ['banana','orange','apple','grapes'];
const array2 = [];

for(let i=0; i<array1.length; i++){
    array2.push(array1[i].toUpperCase())
}

console.log(array1);
console.log(array2);
