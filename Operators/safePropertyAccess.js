const obj = { property: "Hello" };
const value = obj && obj.property;
console.log(value); // Output: "Hello"

let obj; // undefined
const value = obj && obj.property;
console.log(value); // Output: undefined (no error thrown)

const obj = null;
const value = obj && obj.property;
console.log(value); // Output: null (no error thrown)

const user = { profile: { name: "Alice" } };
const userName = user && user.profile && user.profile.name;
console.log(userName); // Output: "Alice"