function isPalindrome(p) {
    p = p.toLowerCase().replace(/\s/g,'');
    return p === p.split('').reverse().join('');
}
console.log(isPalindrome("hello"));