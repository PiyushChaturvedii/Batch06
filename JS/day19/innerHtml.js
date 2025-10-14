// inner html vs text

const headerContent = document.querySelector('.heading')
// console.log(headerContent.innerHTML);
// console.log(headerContent.innerText);


headerContent.innerHTML = '<h1> Updated <span>Heading</span> by JavaScript</h1>'
// headerContent.innerText = '<h1> Updated <span>Heading</span> by JavaScript</h1>'


headerContent.innerHTML += `<button class=\"btn--class\">Click Here</button>`

const btn = document.querySelector('button');
console.log(btn);
btn.style.padding = '20px';
btn.style.fontSize = '20px';

