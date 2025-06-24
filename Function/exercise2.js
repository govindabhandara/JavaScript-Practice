// create a function to roll a dice  and always display the value of dice (1 to 6). 

function createRandom() {
    let ran = Math.floor(Math.random()*6)+1;
    console.log(ran);
}
createRandom();