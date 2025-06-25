// allow us to use any CSS selector
document.querySelector('p'); // select first p element
document.querySelector('#myId'); // select first element with id=myId
document.querySelector('.myClass'); //selects first element with class=myClass
document.querySelectorAll("p"); //selects all p element


console.dir(document.querySelector('h1'));
console.dir(document.querySelector('#alertBox'));
console.dir(document.querySelector('.container'));
console.dir(document.querySelectorAll('container'));