let btns=document.querySelectorAll('button');
for (btn of btns) {
    btn.onclick=sayhello;
    btn.onmouseenter = function () {
        console.log("you clicked ");
    }
}
function sayhello() {
    alert("hello");
}
