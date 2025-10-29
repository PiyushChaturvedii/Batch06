// intro the promises

// an object that represent the eventually completion or failure of an async javascript
//provides clean syntac for handling async code compare to tradition callback funtion

//why

//its important bcause the allow to write async code as more readable and mainatainable way
//easy to handle err

// promises (pending, fulfilled, rejected)

//pending - intial state, represent before async operation has completed

// fulfilled - when async operation is successfull it return value

// rejected - when async operation fail then occure and return an error

// console.log("Program start");
// const bucket = ['chips','vegetables','salt','rice','coffee','milk']

// const friedRicePromise = new Promise((resolve,reject)=>{
// if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes("rice")){
//     resolve({value:"Fried Rice",message:"Promise Resolved"})
// }else{
//     reject("Could not make it")
// }
// })

// friedRicePromise.then((myFriedRice)=>{
// console.log("Let it ", myFriedRice);
// }).catch((error)=>{
//     console.log("Error: ",error);
// }
// )

//Covert Nested call back to flat code using promises

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("Element not found.");
      }
    }, time);
  });
}

changeText(heading1, "One", "blue", 2000)
  .then(() => {changeText(heading2, "Two", "yellow", 1000);})
  .then(() => {changeText(heading3, "Three", "red", 3000);})
  .then(() => {changeText(heading4, "Four", "orange", 4000);})
  .then(() => {changeText(heading5, "Five", "green", 5000);})
  .then(() => {changeText(heading6, "Six", "lightgreen", 3000);})
  .catch((err) => {
    alert(err);
  });
