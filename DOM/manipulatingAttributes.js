// Object.getAttribute(attr);
// Object.setAttribute(attr,val);
let cls=document.querySelector('.card');
console.dir(cls.getAttribute('card'));
console.dir(cls.setAttribute('card','grade'));

//style
let p= (document.querySelector('p'));
console.log(p.style);
console.log(p.style.color='purple');
console.log(p.style.backgroundColor='green');