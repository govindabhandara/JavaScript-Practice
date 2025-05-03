let text="i like apples.";
// Replace first occurance
console.log(text.replace("apples","oranges"));

// Replace all occurance using regex 
console.log(text.replace(/like/,"love"))  // simple replacement
console.log(text.replace(/like/g,"love"))  // Global replacement
