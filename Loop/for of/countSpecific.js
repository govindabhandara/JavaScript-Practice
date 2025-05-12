const colors = ['red', 'blue', 'green', 'blue', 'yellow', 'blue'];
let blueCount = 0;
for (const color of colors) {
  if (color === 'blue') blueCount++;
}
console.log(blueCount); // Output: 3