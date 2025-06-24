const student = {
    name:"Govinda",
    marks:95,
    prop: this,
    getName: function () {
        return this.name;
    },
    // getMarks: () => {
    //     console.log(this); // this mean parent scope -> window
    //     return this.marks;
    // },
    getInfo1:function() {
        setTimeout(() => {
            console.log(this);  // here this is student
        },2000);
    },
    getInfo2:function() {
        setTimeout( function() {
            console.log(this); // here this is windows
        },2000);
    }
};
console.log(student.getName());
// console.log(student.getMarks());

console.log(student.getInfo1());
console.log(student.getInfo2());

// 
