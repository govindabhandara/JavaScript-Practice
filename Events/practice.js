// //change
// let user=document.querySelector('#user');
// user.addEventListener("change", function(event) {
//     event.preventDefault(); 
//     console.log("input changed");
//     console.log("final value ",this.value);
// });

// //input
// let user=document.querySelector('#user');
// user.addEventListener("input", function(event) {
//     event.preventDefault(); 
//     console.log("input changed");
//     console.log("final value ",this.value);
// });

//change for small input
let inp=document.querySelector("#text");
let p=document.querySelector('p');
inp.addEventListener("input",function() {
    console.log(inp.value);
    p.innerText=inp.value;
});