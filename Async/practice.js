let h1=document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
        h1.style.color=color;
        resolve("color changed");
        },delay);

    }) 
}

changeColor("red",1000)
.then (()=>{
    console.log("red color changed");
    return changeColor("orange",1000);
})
.then (()=>{
    console.log("orange color was changed sucessfully");
    return changeColor("green",1000);
})

.then (()=> {
    console.log("green color changed");
});

//..........................................................
// let requestPromise = changeColor("red",1000);
// let requestPromise1 = changeColor("green",4000);

//..........................................................
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000);
//     })
// })