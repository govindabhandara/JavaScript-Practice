
const user = { profile: { name: "Alice" } };
const userName = user && user.profile && user.profile.name;
console.log(userName); // Output: "Alice"