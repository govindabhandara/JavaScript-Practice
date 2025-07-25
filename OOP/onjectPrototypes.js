// const stu1 = {
//     name:"adam",
//     age:25,
//     marks:95,
//     getMarks:function() {
//         return this.marks;
//     },

// };

// const stu2 = {
//     name:"madam",
//     age:26,
//     marks:85,
//     getMarks:function() {
//         return this.marks;
//     },
// };

// const stu3 = {
//     name:"govinda",
//     age:30,
//     marks:90,
//     getMarks:function() {
//         return this.marks;
//     },
// };

// prototypes are the mechanism by which javascript objects inherit features from one another.
// It likes a single template object that all object inherit method and properties from without having their own copy.
// arr._ptoto_(reference)
// Array.prototype (actual object )
// String.prototype

let arr=[1,2,3];
let arr2=[1,2,3];

arr.sayHello=()=>{
    console.log("hello, i am govinda");
}
arr2.sayHello=()=>{
    console.log("hello, i am govinda");
}
