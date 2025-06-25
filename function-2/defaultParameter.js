// Giving a default value to the arguments
function func (a,b=2) {
    //do something
}

function sum (a,b=2) {
    console.log(a+b);
}
sum(3);
sum(3,5);

function sum (a=5,b) {
    return a+b;
}
console.log(sum(2,6));
console.log(sum(4));//NaN where b=undefined