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
// let request =savetoDb ("govinda bhandara");
// request
// .then(()=>{
//     console.log("promise resolved");
//     // console.log(request);
// })
// .catch(()=>{
//     console.log("promises rejected");
//     // console.log(request);
// })

savetoDb ("govinda bhandara")
.then(()=>{
    console.log("promise resolved");
    
})
.catch(()=>{
    console.log("promises rejected");
})