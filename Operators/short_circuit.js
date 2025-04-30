// Predict the output of True or (1/0) (no error due to short-circuiting).
let result = true || (0/1);
console.log(result);

// an example of the Short circuiting operators.
let output=false && (console.log("This won't run."),true);
console.log(output);

// Short-circuiting using the AND(&&) operator.
let a=Number(prompt("enter"));
let b=Number(prompt("enter"));
const res=(a>0 && b<20) && "Both conditions are true";
console.log(res);