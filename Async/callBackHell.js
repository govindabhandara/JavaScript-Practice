let h1=document.querySelector('h1');

function changeColor(color, delay,nextColorChange) {
    setTimeout(()=> {
    h1.style.color=color;
    if (nextColorChange)nextColorChange();
    },delay);
    
}
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000);
    })
});
//callback nesting  : callback hell

//...............................................................................................
// function changeColor(color, delay) {
//     setTimeout(()=> {
//     h1.style.color=color;
//     },delay);
    
// }

// changeColor("red",1000);
// changeColor("green",2000);
// changeColor("blue",3000);


//.....................................................................................................
//  setTimeout (()=> {
//  h1.style.color='red';},1000);

//  setTimeout (()=> {
//  h1.style.color='orange';},2000);

//  setTimeout (()=> {
//  h1.style.color='green';},3000);