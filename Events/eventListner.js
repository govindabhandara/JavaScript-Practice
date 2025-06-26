//addEventListener
// element.addEventListener(event,callback)
let btns=document.querySelectorAll('button');
for (btn of btns) {
    // btn.addEventListener("click",sayhello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick", function () {
        console.log("you have double click");       // if we double click then it works in this function 
    });
}

function sayhello() {
    alert("hello");
}

function sayName() {
    alert("govinda");
}