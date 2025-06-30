// js is single thread program which code execute at once.
let a=25;
console.log(a);
let b=20;
console.log(b);
console.log(a+b); 
// this is synchrous nature

// execute one by one at once

// one callback , goes argument in next function

setTimeout (function () {
    console.log("govinda bhandara");
},2000);
console.log("hello ...")
