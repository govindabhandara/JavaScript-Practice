// Scope determines the accessibility of variables, objects, and functions from different parts of the code.
// 1) function
// 2) Block
// 3) Lexical
// 4) Global Scope


//function scope : Variables define inside a function are not accessible(visible) from outside of function.
function calSum(a,b) {
    let sum=a+b;
    console.log(sum); //function scope , in this scope we have use only inside the function.
}

calSum(2,3);

//Block Scope : variables declare inside a {} block cannot be accessible outside of the block.

// {
//     let a=25;
// }
// console.log(a); // cannot run this because outside of {} cannot run. 
//                 // but if we use var instead of let then it works. but we never use this.

// for (let i=1;i<=5;i++) {
//     console.log(i);
// }   // it works



//Lexical Scope: a variable defined outside a function can be 
                // accessible inside another function defined after the variable declaration.
                //The opposite isn't true.
                //nested function
function outerFunc() {
    let x=5;
    let y=6;
    function innerfunc() {
        console.log(x)
        let a=10;
        console.log(a); // in lexical scope it works from outerfunction to inner but not from inner to outer
    }
    innerfunc(); 
}
console.log(outerFunc());
console.log(a); // output is wrong because in lexical scope it works from outerfunction to inner but not from inner to outer.

// all scope in one function
let greet="hello";      // Global Scope
function changeGreet() {
    let greet="namaste";  // function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet); // lexical scope
    }
    innerGreet();
}
console.log(greet);
changeGreet();




