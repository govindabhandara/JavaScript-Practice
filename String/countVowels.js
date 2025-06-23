function countVowels(s) {
    const vowels='aeiouAEIOU';
    return s.split('').filter(char=>vowels.includes(char)).length;
}
console.log(countVowels("Hello world"));