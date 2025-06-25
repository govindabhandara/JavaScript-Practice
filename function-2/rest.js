// Allows a function to take an indefinite number of arguments and bundle them in an array 
function sum (args) {
    return args.reduce((add,el)=> add+el);
}
// function sum(...args) {
//     for (let i=0;i<args.length;i++){
//     console.log("you gave:",args[i]);
//     }
// }

// function min(a,b,c,d){
//     console.log(arguments);
//     console.log(arguments.length);

// }

function sum(...args) {
    return args.reduce((sum,el)=> sum+el);
}

function mul(...args) {
    return args.reduce((mul,el)=>mul*el);
}

function min(...args) {
console.log(msg);
    return args.reduce((min,el)=>{
        if (min>el) {
            return el;
        } else {
            return min;
        }
    });
}