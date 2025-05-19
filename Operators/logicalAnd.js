console.log(true && "hello");  // "hello" (both truthy → returns last value)
console.log(0 && "hello");     // 0 (first falsy → stops and returns 0)
console.log(null && false);    // null (first falsy)
console.log(false&&'hello');