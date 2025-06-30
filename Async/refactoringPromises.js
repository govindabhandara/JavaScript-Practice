// promises - object : resolve and reject

function savetoDb(data) {
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if (internetSpeed>4){
            resolve("success: data saved");
            // success("success: data saved");
        } else {
            reject("failure : weak connection");
            // failure("failure : weak connection");
        }
    });
}
// savetoDb("govinda bhandara");