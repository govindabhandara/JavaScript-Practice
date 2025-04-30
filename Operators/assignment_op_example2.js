// Swap two variables x and y without a temporary variable (using arithmetic operators).
let x = 5;
let y = 10;

console.log(`Before swap: x = ${x}, y = ${y}`);

// Swap using arithmetic operations
x = x + y;  // x becomes 15 (5 + 10)
y = x - y;  // y becomes 5 (15 - 10)
x = x - y;  // x becomes 10 (15 - 5)

console.log(`After swap: x = ${x}, y = ${y}`);