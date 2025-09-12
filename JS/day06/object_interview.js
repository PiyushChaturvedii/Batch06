//Object Interview Question

//object inside arrays
// const products = [
//   { id: 1, productName: "Laptop", price: 1200 },
//   { id: 2, productName: "Smart Phone", price: 600 },
//   { id: 3, productName: "Headphones", price: 200 },
//   { id: 4, productName: "Home Speakers", price: 400 },
// ];

//using for of loop how to fetch all products id?
//using for of loop how to fetch all products id with price?


// for(let product of products){
    // console.log(product['id']); //bracket notation
    // console.log(product.id, " : ", product.price); //dot notation
// }

//using for of loop how to fetch all products id with price those>500?

// for(let product of products){
//     if(product.price>500){
//         console.log(product.id," : ",product.price);
//     }
// }

//nested destructuring
// const products = [
//   { id: 1, productName: "Laptop", price: 1200 },
//   { id: 2, productName: "Smart Phone", price: 600 },
//   { id: 3, productName: "Headphones", price: 200 },
//   { id: 4, productName: "Home Speakers", price: 400 },
// ];

// const [{productName},{price},{id}]= products;


// console.log(productName);//'laptop'
// console.log(price); // 600
// console.log(id); //3

//rename variable
// const [{productName:pname},{productName:pname_2},,] = products

// console.log(pname);
// console.log(pname_2);

//Increate price by 10% for all products

const products = [
  { id: 1, productName: "Laptop", price: 1200 },
  { id: 2, productName: "Smart Phone", price: 600 },
  { id: 3, productName: "Headphones", price: 200 },
  { id: 4, productName: "Home Speakers", price: 400 },
];

const increasePrice = 0.1; //10%

for(let product of products){
    // console.log(product.price);
    product.price = product.price *(1+increasePrice)
    product.price = product.price.toFixed(2)
}

console.log(products);