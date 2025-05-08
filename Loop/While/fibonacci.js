let a = 0, b = 1;
let limit = 100;

while (a <= limit) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}