let id=setInterval(() => {
    for (i=1;i<=5;i++) {
        console.log("govinda Bhandara");
    }
},2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);