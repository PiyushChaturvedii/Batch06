const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error("Invaild arguments.");
};

// console.log(sum(1));

// try {
//   console.log(sum(1));
// } catch (error) {
//   console.log("Error occurred");
//   //   console.log(error);
// }

console.log("This code is works.");
