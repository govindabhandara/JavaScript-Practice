// let form=document.querySelector('form');
// form.addEventListener("submit", function() {
//     console.log("form Submitted.");
//     alert("form submitted.")
// });

let form=document.querySelector('form');
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("form submitted.")
});