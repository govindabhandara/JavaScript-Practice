// for loop with finding indices for  specific items
let fruits=['apple','banana','cherry','mango'];
let target='banana';
fruits.forEach((fruit,i)=> {
        if (fruit==='banana') {
            console.log(`${target} is found in ${i}.`);
        }
});