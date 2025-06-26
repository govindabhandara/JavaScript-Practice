// // when 'this' is used in a callback of event handler  of something, it refers to do somethings.
// let btn=document.querySelector('button'); 
// let h1=document.querySelector('h1'); 
// let h3=document.querySelector('h3'); 
// let p=document.querySelector('p'); 

// btn.addEventListener("click", function(){
//     console.log(this);
//     console.log(this.innerText);
//     console.dir(this);
//     this.style.backgroundColor="blue";
// })

// h1.addEventListener("click", function(){
//     console.log(this);
//     console.log(this.innerText);
//     console.dir(this);
//     this.style.backgroundColor="blue";
// })

// h3.addEventListener("click", function(){
//     console.log(this);
//     console.log(this.innerText);
//     console.dir(this);
//     this.style.backgroundColor="blue";
// })
// p.addEventListener("click", function(){
//     console.log(this);
//     console.log(this.innerText);
//     console.dir(this);
//     this.style.backgroundColor="blue";
// })  // this is not good to like this code because to reduce redundancy


let btn=document.querySelector('button'); 
let h1=document.querySelector('h1'); 
let h3=document.querySelector('h3'); 
let p=document.querySelector('p'); 

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}

btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);