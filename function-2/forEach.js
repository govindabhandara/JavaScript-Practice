// arr.forEach(some function definition or name);

let arr= [1,2,3,4,5,6];
function print(el) {
    console.log(el);
}
arr.forEach(print);

//or 
arr.forEach(function(el) {
    console.log(el);
});

//for objects

let student= [{
    name:"govinda",
    marks:95
},
{
    name:"Romeo",
    marks:56
},
{
    name:"Roma",
    marks:99
}];

arr.forEach((student) => {
    console.log(student.marks );
})
