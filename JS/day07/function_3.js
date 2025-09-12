//tradition method

//arrow function(reactjs) - reduce the size of code

// find number isEven or not

// function isEven(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const isEven = num => num%2==0;//arrow function, one line code you not need use return keyword

// const even = isEven(10); //boolean

// console.log(even);


//1. check number is Odd or Even

// const isOdd = num =>{
//     return num%2==1;
// }

// const odd = isOdd(10);

// console.log(odd);

//2. Concat two arrays

//tradition array method

// function concatArray(arr1, arr2){
//     return arr1.concat(arr2);
// }

// const arr1 = [1,2,3,4,5]
// const arr2 = [7,8,9]

// const newArray = concatArray(arr1,arr2)

// console.log(newArray);

// arrow function

// const concatArray = (a,b)=>a.concat(b)

// const newArray = concatArray(arr1,arr2)

// console.log(newArray);

//3. multiply all values in array

function multipleArray(array,n){
    let arr2 = [];

    for(let i=0; i<array.length;i++){
        arr2[i] = array[i] * n;
    }
    
    return arr2;
}

const newArray = multipleArray([1,2,3,4],10);

console.log(newArray);