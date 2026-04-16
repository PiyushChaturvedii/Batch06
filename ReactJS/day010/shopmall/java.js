  // LIFO
  // function a() {
  //   const i = 0;
  //   while (i > 2) {
  //     console.log("A");
  //   }
  // }
  // function b() {
  //   a();
  //   console.log("B");
  // }
  // b();

  // const data1 = readFileSync("file.txt")
  // console.log(data1);
  // console.log("Next line");

// readFile("file.txt",(err,data)=>{
//   console.log(data);
// })
// console.log("Next line");


console.log("Start");
setTimeout(()=>{
    console.log("SetTimeout");
},2000)
console.log("End");