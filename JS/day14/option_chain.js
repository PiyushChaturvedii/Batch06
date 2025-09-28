// Option Chaining in JS
// access nested property of objects

// const user = {
//     id: 1,
//     name: "Ram",
//     address:{
//         city: "NY",
//         country: "USA"
//     }
// }

// const country = user?.address?.postalCode

// console.log(country);

// works in arrays

const users = [
  { name: "Ram" },
  { name: "Shyam", },
];

const secondUserCountry = users?.[1]?.address?.country || 'Unknown'
console.log(secondUserCountry);