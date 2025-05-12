const numbers = [1, 2, 3, 4, 5];
let sum = 0;
// Use for...of to calculate the sum of all numbers
for ( num of numbers) {
    sum=sum+num;
}
console.log("sum is:",sum);