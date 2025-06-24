//Action that can perform on an object
const calculator = {
    add : function (a,b) {
        return a+b;
    },
    sub : function (a,b) {
        return a-b;
    },
    mul : function (a,b) {
        return a*b;
    }
};
console.log(calculator.add(3,4));
console.log(calculator.sub(6,4));
console.log(calculator.mul(3,4));