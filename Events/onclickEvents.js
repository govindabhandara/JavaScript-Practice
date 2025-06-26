// onclick events
let btn = document.querySelector('button');
console.dir(btn);
btn.onclick = function (){
    console.log("button was clicked");
    alert("you clicked button");
}


// using function
function sayhello() {
    alert("hello");
}
btn.onclick=sayhello;

//for all buttons
let btns=document.querySelectorAll('button');
for (btn of btns) {
    btn.onclick=sayhello;
}
function sayhello() {
    alert("hello");
}