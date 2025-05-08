let userInput;
while(true) {
    userInput=prompt("enter number betn 1 -10");
    if (userInput>=1 && userInput<=10){
        break;
    }
    console.log("Invalid Input. Try again.");
}
console.log(`you entered ${userInput}`);