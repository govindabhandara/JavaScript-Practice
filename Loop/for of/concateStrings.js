const words = ['This', 'is', 'a', 'sentence'];
let sentence = '';
for (const word of words) {
  sentence += word + ' ';
}
sentence = sentence.trim();
console.log(sentence); // Output: "This is a sentence"