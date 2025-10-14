// Get Root Element

// const rootElement = document.getRootNode()

// console.log(rootElement);

// const htmlElement = rootElement.childNodes[1]
// console.log(htmlElement);

// const htmlChildren = htmlElement.childNodes
// console.log(htmlChildren);

//access title
// const title = htmlChildren[0].childNodes[5]
// console.log(title);

// access parent nodes and change style
// const desc = document.querySelector('#desc');
// console.log(desc);

// const div = desc.parentElement;
// console.log(div);
// div.style.backgroundColor = 'red';

//find siblings of div

// const siblings = div.nextSibling.nextSibling
// console.log(siblings);

// siblings.style.backgroundColor = 'orange'



// getRootNode()
// childNodes
// children
// parentNode
// parentElement
// nextSibling
// nextElementSibling
// prevSibling
// prevElementSibling

const rootElement = document.getRootNode()
console.log(rootElement);

const htmlElement = rootElement.childNodes[1]
console.log(htmlElement);

// childnodes - return \n object also
// children - ignore \n and only return elements

const htmlChildren = htmlElement.children
console.log(htmlChildren);

//parentNode - might be return null or \n object
//parentElement - return html tag or element

const des = document.querySelector('#desc')
console.log(des);

const div = des.parentNode
console.log(div);
const divi = des.parentElement
console.log(divi);