// Check if a number is a power of 2 using (n & (n - 1)) == 0.
let n=Number(prompt("enter"));
let is_two_of_power=(n>0) && (n & (n - 1)) == 0;
console.log(is_two_of_power);