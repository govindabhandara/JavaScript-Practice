// two special property 1) code b) key
let inp = document.querySelector('input');
// inp.addEventListener('keydown',function(event) {
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was pressed");
// });

// inp.addEventListener('keyup',function() {
//     console.log("key was released");
// });

// inp.addEventListener('keydown',function(event) {
//    console.log("code =",event.code); // ArrowUp, ArrowDown,ArrowLeft,ArrowRight
//    if (event.code == "ArrowUp") {
//     console.log("character moved forward");
//    } else if (event.code == "ArrowDown") {
//     console.log("character moved backward");
//    } else if (event.code == "ArrowRight") {
//     console.log("character moved Right");
//    } else if (event.code == "ArrowLeft") {
//     console.log("character moved left");
//    }
   
// });

inp.addEventListener('keydown',function(event) {
   console.log("code =",event.code); // ArrowUp(U), ArrowDown(D),ArrowLeft(L),ArrowRight(R)
   if (event.code == "KeyU") {
    console.log("character moved forward");
   } else if (event.code == "KeyD") {
    console.log("character moved backward");
   } else if (event.code == "KeyR") {
    console.log("character moved Right");
   } else if (event.code == "KeyL") {
    console.log("character moved left");
   }
   
});
