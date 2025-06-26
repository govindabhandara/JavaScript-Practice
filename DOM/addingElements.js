// document.createElement('p')
// appendChild(element)
//append(element)
// prepend(element)
// insertAdjacent(where, element)
let new = document.createElement('p');
console.dir(new);
new.innerText="Hi, I am adding new paragraph";
let body = document.querySelector('body');
body.appendChild(new);


