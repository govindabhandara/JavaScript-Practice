// this keyword refers to an object that is executing the current piece of code
const student = {
    stdName:"govinda",
    age:28,
    college:"ASCOL",
    city:"Kathmandu",
    eng:85,
    math:90,
    phy:88,
    getAvg() {
        let avg=(this.eng+ this.math+this.phy)/3;
        console.log(avg);
        
    }
}
console.log(student.getAvg());

// function getAvg() {
//     console.log(this);
// }
