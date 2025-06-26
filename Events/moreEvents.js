// change events: The change event occurs when the value of the element has
                //been changed (only works in <input>,<textarea> and <select> elements.
//Input events : The input event fires when the values of an <input>,<textarea> and <select> elements has changed.

//change
let user=document.querySelector('#user');
user.addEventListener("change", function(event) {
    event.preventDefault(); 
    console.log("input changed");
    console.log("final value ",this.value);
});

//input
let user1=document.querySelector('#user1');
user.addEventListener("input", function(event) {
    event.preventDefault(); 
    console.log("input changed");
    console.log("final value ",this.value);
});

//change for small input
let inp=document.querySelector("#text");
let p=document.querySelector('p');
inp.addEventListener("input",function() {
    console.log(inp.value);
    p.innerText=inp.value;
});