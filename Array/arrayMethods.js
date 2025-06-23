//Push : add to ends
//Unshift :
//Pop :detele from end and rreturns it
//Shift : Delete from starts and returns it

let cars=['audi','BMW','xuv','maruti'];
console.log(cars);
cars.push("toyota");
console.log(cars);
cars.push("ferrari");
console.log(cars);

cars.pop();
console.log(cars);

cars.unshift('ferrari');
console.log(cars);

cars.shift();
console.log(cars);

let followers=["a","b","c","d","e"];
let blocked =followers.shift();
console.log(blocked);
console.log(followers);