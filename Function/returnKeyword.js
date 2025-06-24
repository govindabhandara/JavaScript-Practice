// // return keyword is used to return some value from function.
// // input -----> function(does some works) ----> output

// function funcName(arg1,arg2) {
//     // do something 
//     return val;
// }

function sum(a,b) {
    return a+b;
}
console.log(sum(2,3));
console.log(sum(sum(2,3),5));


// isAdult
function isAdult(age) {
    if (age>=18) {
        return "adult";
    }
    else {
        return "not adult";
    }
}
console.log(isAdult(22));