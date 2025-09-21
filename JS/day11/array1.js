//Map, Reduce, Filter

// higher order function and also create a new array without modify the original array

// Map -> when you want to apply functions to all element inside array

// Filter -> when you need to exclude some values from the array

//Reduce -> when you want to perform a cumulative operations in array or return a single value.


// Q1. Fetch Products with price is less than 200

const products = [
    {id:1,name:'laptop',price:400},
    {id:2,name:'Phone',price:300},
    {id:3,name:'TV',price:600},
    {id:4,name:'Airbuds',price:100},
    {id:5,name:'home theatre',price:150}
]

const filteredProducts = products.filter((product)=>{
    return product.price < 200;
    // if(product.price<200){
    //     return product;
    // }
})

console.log("Filter products with price: ");
console.log(filteredProducts);


// Q2. Add 10% discount to all products

const updatePrice = products.map((product)=>{
    product.price = product.price + 0.1*product.price;
    return product
})

console.log("\n After add 10% discount to all products");
console.log(updatePrice);

// Q3. Find total price of all products

// acc is total
// curr is product

const totalPrice = products.reduce((total,product)=>{
    console.log("Total: ", total, " price: ",product.price);
    
    total = total + product.price;
    return total;
},0);

console.log("Total price is: ",totalPrice);

// Q4. Find total area of all rectangles

const rectangles = [
    {width:10, height:20},
    {width:20, height:70},
    {width:60, height:80},
    {width:40, height:50},
]

//acc totalArea
//curr is all rectangels
const totalArea = rectangles.reduce((totalArea,rec)=>{
    console.log('Total Area', totalArea, " width: ",rec.width, " height: ", rec.height);
    totalArea = totalArea + rec.width*rec.height;
    return totalArea
},0)

console.log("Area is: ",totalArea);