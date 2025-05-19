console.log(false || "hello"); // "hello" (first truthy)
console.log(0 || "" || null);  // null (all falsy → returns last falsy)
console.log(0 || "hello");     // "hello" (first truthy)