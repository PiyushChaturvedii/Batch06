//nested if

let website = "Udemy";
let course_name = "Python";
let code_challenge = false;

if (website === "Aeeron") {
  if (course_name === "JavaScript") {
    if (code_challenge === true) {
        console.log("I want to learn JavaScript course.");
    } else{
        console.log("I dont want to learn this course beacause challenges not present.");
    }
  }else{
    console.log("I dont want to learn this course because this course is not JavaScript");
  }
}else{
    console.log("I want to learn from Aeeron.");
}
