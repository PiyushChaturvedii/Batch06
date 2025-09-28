// Sort method

const fruits = ['banana', 'orange', 'apple', 'grapes'];
console.log(fruits);
fruits.sort()
console.log(fruits);

// not expected output
// const numbers = [2,4,5,3,1,15]
// console.log(numbers);
// numbers.sort();
// console.log(numbers);

//custom sort method
const numbers = [2,4,5,3,1,15]
console.log(numbers);
numbers.sort(function(a,b){
    // return a-b;  //desc
    return b-a;    //asc
})

// if result negative - a comes before b
// if result positive - b comes before a
console.log(numbers);


//Sorting based on Price High to low and low to high

const products = [
    {id:1, productName: 'Laptop', price: 2000},
    {id:2, productName: 'Phone', price: 4000},
    {id:3, productName: 'Mobile', price: 6000},
    {id:4, productName: 'Blutooth Speaker', price: 500},]

    // sort low to high (asc)

    products.sort(function(a,b){
        return a.price - b.price
    })

    console.log('Low to High');
    console.log(products);

    // sort High to Low (desc)
    console.log("High to Low");
    products.sort(function(a,b){
        return b.price - a.price
    })

    console.log(products);