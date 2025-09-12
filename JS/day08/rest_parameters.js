// Rest Parameter in Functions


// Calculate sum using rest parameters

function calculateSum(...numbers){
    let sum = 0;
    for(let num of numbers){
        sum = sum + num;
    }
    return sum;
}


const sum1 = calculateSum(10,20,30,67,78,98,9);

console.log(sum1);

// concat a string with rest parametes

function concatString(saperator,...strings)
{
return strings.join(saperator);
}

const concatStr1 = concatString('-','apple','banana','orange','a','b','c','d','e','f','d')
const concatStr2 = concatString(' * ','apple','banana','orange','a','b','c','d','e','f','d')

console.log(concatStr1)
console.log(concatStr2)

// find maximum number among all arguments

function findMax(...rest){
return Math.max(...rest);
}

const max1 = findMax(10,23,34,23,12,34,23,45,23);
console.log(max1);