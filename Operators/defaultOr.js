
const userInput = "Alice";
const name = userInput || "Guest";
console.log(name); // Output: "Alice"


const userInput = "";
const name = userInput || "Guest";
console.log(name); // Output: "Guest"

let userInput; // undefined
const name = userInput || "Guest";
console.log(name); // Output: "Guest"

const userInput = null;
const name = userInput || "Guest";
console.log(name); // Output: "Guest"