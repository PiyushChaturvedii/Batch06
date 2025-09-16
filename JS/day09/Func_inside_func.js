//Function Inside Function

// function outerFunc(){
//     innerFunc();
//     console.log('Outer Function is executed');

//     function innerFunc(){
//         console.log('Inner Function is executed');
//     }
// }

// outerFunc();

function outerFunc() {
  console.log("Outer Function is executed");

  function innerFunc() {
    console.log("Inner Function is executed");
  }
  return innerFunc();
}

// var a = outerFunc();

// console.log(a);

// outerFunc()();
