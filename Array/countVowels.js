// Using a simple Loop
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("Hello World")); // 3

// Using regular expression
function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(countVowels("Hello World")); // 3

// using reduce
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').reduce((count, char) => {
        return count + (vowels.includes(char) ? 1 : 0);
    }, 0);
}

console.log(countVowels("Hello World")); // 3

// Using Filter
function countVowels(text) {
    vowels=['a','e','i','o','u'];
    return text.toLowerCase().split('').filter(char=>vowels.includes(char)).length;
}
console.log(countVowels("govinda bhandara"));





