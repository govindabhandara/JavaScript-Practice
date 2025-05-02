let time=TimeRanges(prompt("enter time"));
let workoutTime=time<12 ? "morning exercise":"evening exercise";
console.log(`Recommend you ${workoutTime}`);