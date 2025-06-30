async function greet() {
    throw "404 page not found";
    return "hello world";
}
//...........................................................
greet()
.then ((result)=> {
    console.log("promise was succesfull");
    console.log("result was:",result);
})
.catch ((err)=> {
    console.log("promise was rejected :",err);
});

//..................................................
let demo = async () => {
    return 5;
}; // reutrn a promise value