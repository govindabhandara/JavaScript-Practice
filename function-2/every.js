// returns true if every element of array gives true for some function. Else return false
// arr.every (some function definition or name
let arr=[1,2,3,4,5,6,7,8,9].every((el)=>(el%2==0));
let even=[2,4,6,8,10].every((el)=>(el%2==0));
let odd=[1,3,5,7,9].every((el)=>(el%2 !=0));