// Object Destructure

// extract values from object an assign to variable

//1. basic object destructuring

// const person = {
//   name: "Ram",
//   age: 30,
//   country: "US",
// };
// console.log(person);

// const { myName, myAge, myCountry } = person;
// const { name, age, country } = person;


// console.log(name);
// console.log(age);
// console.log(country);


// 2. rename variable with destructuring

// const student = {firstName:'Alice', lastName:'Smith'}

// const {firstName:first,lastName:last}= student; //rename variable

// console.log(firstName,lastName);
// console.log(first,last);

// 3. default values in destructing

// const user = {userName:'ram1234'}

// const {userName,password='default'} = user;

// console.log(userName);
// console.log(password);

// 4. Nested Object Destructing

const personalDetail = {
    myName: 'Ram',
    age: 30,
    address:{
        city:'New York',
        country:'USA'
    }
}

const {myName:personalName,address:{city,country}} = personalDetail;

console.log(personalName);
console.log(city);
console.log(country);