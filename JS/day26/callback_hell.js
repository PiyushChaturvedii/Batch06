// Callback hell - pyramid of DOM

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

// setTimeout(()=>{
//     heading1.textContent = 'One'
// },2000)

// setTimeout(()=>{
//     heading2.textContent = 'Two'
// },2000)

// after change h1 then after 2 second change h2

// setTimeout(()=>{
//     heading1.textContent = "One"
//     setTimeout(()=>{
//         heading2.textContent = "Two"
//         setTimeout(()=>{
//             heading3.textContent = "Three"
//             setTimeout(()=>{
//                 heading4.textContent = "Four"
//             },3000)
//         },3000)
//     },2000)
// },1000)

function changeText(element, text, time, onSuccessCallback, onFailureCallback) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      if (onSuccessCallback) {
        onSuccessCallback();
      } else {
        if (onFailureCallback) {
          onFailureCallback();
        }
      }
    }
  }, time);
}

// pyramid of DOM

changeText(
  heading1,
  "One",
  1000,
  () => {
    changeText(
      heading2,
      "Two",
      2000,
      () => {
        changeText(
          heading3,
          "Three",
          3000,
          () => {
            changeText(
              heading4,
              "Four",
              4000,
              () => {
                changeText(
                  heading5,
                  "Five",
                  5000,
                  () => {},
                  () => {
                    console.log("h5 is not present");
                  }
                );
              },
              () => {
                console.log("h4 is not present");
              }
            );
          },
          () => {
            console.log("h3 is not present");
          }
        );
      },
      () => {
        console.log("h2 is not present");
      }
    );
  },
  () => {
    console.log("h1 is not present.");
  }
);
