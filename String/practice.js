// Check if a string is a palindrome (reads the same forwards and backwards).
function isPalindrome(p) {
    p = p.toLowerCase().replace(/\p/g,'');
}
console.log(isPalindrome("madam"));