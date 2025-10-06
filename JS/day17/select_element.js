// Select Element by Id and Class

// console.log("Hello JavaScript");

// getElementById

const heading = document.getElementById("heading");
console.log(heading);

const h1Heading = document.getElementById("h1-heading");
// console.log(typeof(h1Heading));
console.log(h1Heading);

// getElementByClassName

const paragraphContent = document.getElementsByClassName("desc");
// console.log(typeof(paragraphContent));
// console.log(paragraphContent);
console.log(paragraphContent[0]);


const footerContent = document.getElementsByClassName('footer')
// console.log(footerContent);
console.log(footerContent[0].innerHTML);

