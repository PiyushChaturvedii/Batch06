//More Functions
//return keyword
//parameters
//arguments
//default parameters


// function myFunction (){
//     // console.log("Inside Function");
//     return "Inside Function";
// }

// const a = myFunction();

// console.log(a);

// a,b parameters function
// function addTwoNumbers(a,b){
   
//     return a + b;
// }

// const sum = addTwoNumbers(10,20)//  here 10,20 is arguments

// console.log(sum);

// convert  lowercase to uppercase

function covertToUppercase(a){
    return a.toUpperCase();
}

const str1 = covertToUppercase('javascript');
const str2 = covertToUppercase('ram')
const str3 = covertToUppercase("a")
const str4 = covertToUppercase('good morning')


// console.log(str1,str2,str3,str4);

//arguments also takes an array object,

//find the value inside array

function findIndex(array,target){
    for(let i = 0; i<array.length;i++){
        if(array[i]===target){
            return i //return index
        }
    }
    return -1; //return -1 target is not present in array
}

const array = [1767,3432,4343,44343,43435,343,34432,423423,234423,2434234,422342,423432,4324,324324,23423,32432,432432,432432,4234324,324324,32432,4,234324,32423,423,432,423,4];
const findval1 = findIndex(array,4);
const findval2 = findIndex(array,3432);

// console.log(findval1);
console.log(findval2);


