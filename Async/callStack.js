function hello() {
    console.log("inside hello function") 
    console.log("hello");
}

// hello();   //call
// stack - LIFO : Last In - First Output
 
function demo() {
    console.log("calling hello function")
    hello();
 }
 console.log("calling demo function")
 demo();
 console.log("done, bye")

