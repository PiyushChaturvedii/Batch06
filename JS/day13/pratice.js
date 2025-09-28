// Interview based Questions on Maps and Sets

// Q1. Remove duplicate elements from an array using sets

// const removeDuplicates = (arr) =>{
//     const uniqueSet = new Set(arr);

//     const uniqueArray = [...uniqueSet] //copy all elements from set to array

//     return uniqueArray
// }

// const originalArray = [1,2,3,4,5,3,2,1,4];

// const resultArray = removeDuplicates(originalArray);

// console.log(resultArray);
// console.log("Size of Original Array: ",originalArray.length);
// console.log("size of Result Array: "resultArray.length);


// Q2. Write Functons that take two sets and return union and intersection

// const setOperation = (setA,setB)=>{
    // const unionSet = new Set([...setA,...setB])//copy all values of setA and setB and create new set

//     const intersection = new Set([...setA].filter(x=>setB.has(x)))

//     return intersection
// }


// const arr1 = [1,2,3,4,5];
// const arr2 = [2,3,4,6,7,8];

// const resultSet = setOperation(arr1,arr2)
// console.log(resultSet);

// Q3. Check key exist in a Map and retrive value

// const getValueByKey = (myMap,key)=>{
//     if(myMap.has(key)){
//         return myMap.get(key);
//     }else{
//         return 'Key not found'
//     }
// }

// const exampleMap = new Map([
//     ['name', 'Ram'],
//     ['age', 26],
//     ['country', 'India'],
// ])

// console.log(getValueByKey(exampleMap,'city'));

// Q4. WAF that logs all key-value pairs

// const logMap = (myMap) =>{
//     for(let [key,value] of myMap){
//         console.log(`${key} ===>>> ${value}`);
//     }
// }

// const myMap = new Map([
//     ['fruit', 'apple'],
//     ['color', 'red'],
//     ['quantity', 20],
// ])

// logMap(myMap);

// Q5. Find unique values accros multiple arrays using sets and store the count occurrence in a Map

const findUniqueBaluesCount = (...arrays)=>{
    const uniqueSet = new Set([...arrays.flat()])

    const countMap = new Map();

    uniqueSet.forEach(values=>{
        const count = arrays.reduce((acc,arr)=>acc+arr.includes(values),0);
        countMap.set(values,count)
    })
    return countMap;
}

const arr1 = [1,2,3,4,5,6]
const arr2 = [2,3,4,5,6,7,8,9]
const arr3 = [3,4,5,6,2,3,2,1,7,8,9]

const resultMap = findUniqueBaluesCount(arr1,arr2,arr3)

console.log(resultMap);