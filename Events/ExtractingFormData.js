// let form=document.querySelector('form');
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     let input=document.querySelector('input');
//     console.dir(input.value);
// });

// let form=document.querySelector('form');
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     let user=document.querySelector('#user');
//     let pass=document.querySelector('#password');
//     console.dir(user.value);
//     console.dir(pass.value);
// });

let form=document.querySelector('form');
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.dir(form);
    let user=this.elements[0];
    let pass=this.elements[1];
    console.log(user.value);
    console.log(pass.value);
});