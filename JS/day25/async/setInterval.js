console.log("Set Interval");

// set Time Out -- calling only once

// set interval -- call infinte time at the interval

// setInterval(function(){
//     console.log("Set Interval calling function");
//     console.log(Math.random()*10);
// },1000)

const body = document.body;

const btn = document.querySelector('button')


const intervalID = setInterval(function(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgb = `rgb(${red},${green},${blue})`
    body.style.background = rgb
},1000)

btn.addEventListener('click',function(){
    clearInterval(intervalID)
    btn.textContent = body.style.background
})