function reverseString(s) {
    return s.split('').sort().join('');
}
console.log(reverseString("hello"));