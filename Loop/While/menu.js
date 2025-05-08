while (true) {
    console.log("1. Option 1");
    console.log("2. Option 2");
    console.log("3. Exit");
    
    let choice = prompt("Enter your choice:");
    
    switch (choice) {
        case "1":
            console.log("You chose Option 1");
            break;
        case "2":
            console.log("You chose Option 2");
            break;
        case "3":
            console.log("Exiting...");
            process.exit(0);
        default:
            console.log("Invalid choice");
    }
}