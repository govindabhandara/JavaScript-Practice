let arr=[1,2,3,4,5,6,7,8,9,0];
let newArr=[...arr];
console.log(newArr); 
console.log(newArr.push(6));

//
let odd=[1,3,5,7,9];
let even=[2,4,6,8];
let num=[...odd,...even];
console.log(num);    //orders matter in spread array with literals