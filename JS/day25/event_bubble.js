//Event Bubbling and Event Capturing(propogation)

// Event bubbles

// event bubble ups

// when trigger any events then its bubble up to the root elements

// Event Capturing
// when event trigger then start from the root element and goes to the targeted elements

const parent = document.querySelector('.parent')
const child = document.querySelector('.child')
const btn = document.querySelector('.btn')


//Propogation

//Capturing
parent.addEventListener('click', function(){
    console.log("Capturing Phase : Parent");
},true)
child.addEventListener('click', function(){
    console.log("Capturing Phase : Child");
},true)
btn.addEventListener('click', function(){
    console.log("Capturing Phase : Button");
},true)

//Bubbling
parent.addEventListener('click', function(){
    console.log("Bubbling Phase : Parent");
})
child.addEventListener('click', function(){
    console.log("Bubbling Phase : Child");
})
btn.addEventListener('click', function(){
    console.log("Bubbling Phase : Button");
},false)

