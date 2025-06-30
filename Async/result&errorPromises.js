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
    .then((result)=>{
        console.log("data1saved, promise resolved.");
        console.log("result of promise",result);
        return savetoDb("hello world");
    })
    .then(()=> {
        console.log("promise2 resolved");
        console.log("result of promise",result);
        return savetoDb("Mobile");
    })
    .then (()=> {
        console.log("data 3 saved");
        console.log("result of promise",result);
    })

.catch((error)=>{
    console.log("promises rejected");
    console.log("result of error",error);
})