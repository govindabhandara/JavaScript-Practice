const data= {
    name:"Govinda",
    age:28
}

let newData={...data,id:123};
console.log(newData);

//
let newObj={..."hello"};
console.log(newObj);