//Getting the observable items by their class
const leftObserverItems = document.querySelectorAll('.leftObserver');
const downObserverItems = document.querySelectorAll('.downObserver');


//Options for our observer
const options = {
    rootMargin: '0px',
    threshold: 0.7
}


//Observer
const itemsObserver = new IntersectionObserver((entries) => {
    entries.map((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('obsItem');
        } /* else {
            entry.target.classList.remove('obsItem'); //We keep the class, so it doesnt dissapear
        } */
    })
}, options);


//Creating the functions to observe the items
leftObserverItems.forEach((item) => {
    itemsObserver.observe(item);
});

downObserverItems.forEach((item) => {
    itemsObserver.observe(item);
});