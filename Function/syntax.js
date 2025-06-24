// function funName() {
//     //do something
// }

// function calling (use the function) {
//     funName();
// }

function hello() {
    console.log("hello");
}
hello();
hello();
hello();
hello();

function printName() {
    console.log("Govinda Bhandara");
    console.log("Romeo Bhandari");
}
printName()
printName()


function printOneToFive(){
    for (let i=1;i<=5;i++){
        console.log("i:",i);
    }
}
printOneToFive();
printOneToFive();


function isAdult() {
    let age=prompt("enter your age");
    age=parseInt();
    if (age>=18) {
        console.log("Is Adult");
    }
    else {
        console.log("Isn't Adult");
    }
}

isAdult();