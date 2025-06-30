// the promise object represents the eventual completion (or failure ) of an asynchronous operation and its resulting value.
function savetoDb(data,success,failure) {
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if (internetSpeed > 4) {
        success();
        // console.log("your data was saved");
    } else {
        failure();
        // console.log("weak connection, data wasn't saved");
    }
}

savetoDb(
    "Govinda Bhandara", 
    ()=> {
        console.log("success: your data was saved");
        savetoDb(
            "hello, guys", 
            ()=> {
                console.log("success1: your data was saved");    
            },
        ()=> {
            console.log("failure1: your data wasn't saved");
        });
},
()=> {
    console.log("failure: weak connection, your data wasn't saved");
});