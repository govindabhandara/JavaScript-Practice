function savetoDb(data) {
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if (internetSpeed>4){
            resolve("success: data saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

savetoDb ("govinda bhandara")
    .then(()=>{
        console.log("data1saved, promise resolved.");
        return savetoDb("hello world");
    })
    .then(()=> {
        console.log("promise2 resolved");
        return savetoDb("Mobile");
    })
    .then (()=> {
        console.log("data 3 saved");
    })

.catch(()=>{
    console.log("promises rejected");
})