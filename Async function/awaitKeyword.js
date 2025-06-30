//pauses the execution of its sourrounding async function untill the promises settled( resolve or reject).
let h1=document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
        h1.style.color=color;
        console.log(`color changed to ${color}!`);
        resolve("color changed");
        },delay);

    }) 
}
async function demo() {
    await changeColor("red",1000);
    await changeColor("blue",1000);
    await changeColor("orange",1000);
    changeColor("green",1000);
    console.log(err);

}


// changeColor("red",1000)
// .then (()=>{
//     console.log("red color changed");
//     return changeColor("orange",1000);
// })
// .then (()=>{
//     console.log("orange color was changed sucessfully");
//     return changeColor("green",1000);
// })

// .then (()=> {
//     console.log("green color changed");
// });




//..............................................................
// function getNum() {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
            
//         }, 1000);
//     })
// }
// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
// }