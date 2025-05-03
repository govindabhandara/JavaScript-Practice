// Find the first non-repeating character in a string.
function firstNonRepeatingChar(s) {
    const freq = {};
    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for (const char of s) {
        if (freq[char] === 1) return char;
    }
    return null;
}

console.log(firstNonRepeatingChar("swiss"));  // Output: 'w'