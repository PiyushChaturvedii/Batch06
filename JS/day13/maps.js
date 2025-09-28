// Maps in JS

// collection of key-value pairs

// can not store duplicate keys

// map is iterables

// map vs objects

// map is any data types as a key (array, symbols, string)
// preserve ordrs in maps while insertion


// Create a map
let myMap = new Map();

// add key-value pairs in map
// set

//key-value

myMap.set('name','JavaScript')
myMap.set('Desc',"The Complete Course")


console.log(myMap);

// how to get values in a map
// get
console.log(myMap.get('Desc'));

// key is exist or not 
// has
console.log(myMap.has('name'));

// apply for of loop

//map is iterables
for(let [key,value] of myMap){
    console.log(`${key} ---->>> ${value}`);
}

// size of map
console.log(myMap.size);

// clear the map

myMap.clear();
console.log(myMap);