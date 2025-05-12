const values = [12, 34, 8, 56, 23];
let max = values[0];
for (const value of values) {
  if (value > max) max = value;
}
console.log(max); // Output: 56