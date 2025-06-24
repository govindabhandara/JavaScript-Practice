// A function that does one or both
// takes one or multiple function as arguments. 
// returns a function

function multipleGreet(func,n) {
    for(let i=1;i<=n;i++) {
        func();
    }
}
let greet = function () {
    console.log("hello");
}
multipleGreet(greet,2);