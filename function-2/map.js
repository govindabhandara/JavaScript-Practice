// let newArr=arr.map(some function definition or name)

let num=[1,2,3,4,5,6];
// let double =num.map(function(el) {
let double =num.map((el) =>{
    return el*2;
});

//

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

let gpa=student.map((el) => {
    return el.marks/10;
});
console.log(gpa);