let p =document.querySelector('p');
p.addEventListener("click",function() {
    console.log("para");
}); 

let box=document.querySelector('.box');
box.addEventListener("mouseenter", function() {
    console.log("mouse inside div");
})