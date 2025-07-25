// // A function that creates object 

// function personMaker(name,age) {
//     const person ={
//         name:name,
//         age:age,
//         talk: function() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;

// }

function personMaker(name,age) {
    person = {
        name:name,
        age:age,
        talk : function () {
            console.log(`Hello, my name is ${this.name}`);
        },
    };
    return person;
}

let p1=personMaker("adam",35);
let p2=personMaker("gog",45);