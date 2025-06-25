let arr=[1,2,3,4,5,92,49,10,13];
let max=-1;
for (let i=1;i<arr.length;i++) {
    if (max<arr[i]) {
        max=arr[i];
    }
}
console.log(max);
