// ClassList

//add, remove, toggle, contains

const container = document.querySelector("#liDiv");
console.log(container);

//add class
container.classList.add("style1");
container.classList.add("style2");

//remove class
container.classList.remove("style2");

//toggle
//if class is present then remove
//if class is not present then add

container.classList.toggle('style2');
container.classList.toggle('style2');

//checks if class is present or not
const isPresent = container.classList.contains("style2");
console.log(isPresent);


