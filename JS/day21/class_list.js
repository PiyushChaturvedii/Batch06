// add new HTML elements to page
// innerHTML to add html page
// when you use it ?

const lists = document.querySelector('ul')
console.log(lists);

lists.innerHTML += '<li>Hello JS'
lists.innerHTML += '<li>Hello React'
lists.innerHTML += '<li>Hello Node'

const newItem = document.createElement("li")
console.log(newItem);
newItem.textContent = "New Data"


// lists.append(newItem)
lists.prepend(newItem);


//before and after

const newNode = document.createElement('li')
newNode.textContent = 'Random Text'

// lists.after(newNode)
// lists.before(newNode)

//Insert Adjacent elements

//beforeend     --> append
//afterbegin    --> like prepend
//beforebegin   --> before
//afterend      --> after

lists.insertAdjacentHTML("afterend",'<li>Adjacent Element</li>')

