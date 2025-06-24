// function funName(arg1,arg2....) {
//     //do something
// }
function printName(name) {
    console.log(name);
}

printName("Govinda Bhandara");
printName("Romeo Bhandari");

// // arguments with many arguments
// function Name(name,age) {
//     console.log(name,age);
// }
// Name("govinda bhandara",28);
// Name("Romeo Bhandari",36);
// Name("alex"); // alex undefined

function Name(name,age) {
    console.log(`name is ${name}, and age is ${age}`);
}
Name("govinda bhandara",28);
Name("Romeo Bhandari",36);
Name("alex"); // alex undefined

//add
function add(a,b) {
    console.log(a+b);
}
add(2,2);
add(10,20);