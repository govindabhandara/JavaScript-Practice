let sum = 0;
let number = parseInt(prompt("Enter a number (negative to stop):"));

while (number >= 0) {
    sum += number;
    number = parseInt(prompt("Enter another number (negative to stop):"));
}

console.log(`Total sum: ${sum}`);