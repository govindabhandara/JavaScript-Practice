// parentElement
// Children
// previousElementSibling/nextElementSibling
let h3=document.querySelector('h3');
console.dir(h3);
console.dir(h3.parentElement);

let container=document.querySelector('.container');
console.dir(container);
console.dir(container.children);

let alertBox=document.querySelector('#alertBox');
console.dir(alertBox);
console.dir(alertBox.children.previousElementSibling);
console.dir(alertBox.children.nextElementSibling);
 