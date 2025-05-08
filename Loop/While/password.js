const PASSWORD = "secret";
let attempts = 3;
let success = false;

while (attempts > 0 && !success) {
    let guess = prompt(`Enter password (${attempts} attempts left):`);
    if (guess === PASSWORD) {
        success = true;
        console.log("Access granted!");
    } else {
        attempts--;
        console.log("Incorrect password.");
    }
}

if (!success) {
    console.log("Access denied. No attempts left.");
}