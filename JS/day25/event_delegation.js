// Event delegation

// technique to single event listner is attached to the parents

// improve performance

const lists = document.querySelector('.lists');

// console.log(lists);

lists.addEventListener('click',function(event){
    // console.log(event);
    if(event.target.tagName == 'LI'){
        console.log("Clicked On ==> ", event.target.textContent);
    }

})