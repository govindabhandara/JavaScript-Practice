// // inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

// class Person {
//     constructor(name,age) {
//         this.name=name;
//         this.age=age;
//     }
//     talk() {
//         console.log(`I am ${this.name}`);
//     }
// }
// class Student  extends Person{
//     constructor(name,age,marks) {
//         super (name,age);
//         this.marks=marks;
//     }
// }
// let stu1= new Student("adam",23,95);

// class Teacher extends Person {
//     constructor (name,age,subjects) {
//         super(name,age);
//         this.subjects=subjects;
//     }
// }

// let s1=new Student("adam",45,54);
// let t1=new Teacher("govinda",56,"Computer Science");


class Mammal {
    constructor() {
        this.name=this.name;
        this.type="warm-blooded";
    }

    eat() {
        console.log(" I am eating.");
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);        
    }
    bark() {
        console.log("woof....")
    }
}

class Cat extends Mammal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meow...");
    }
}


