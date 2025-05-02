let day=string(prompt("enter day"));
let workout;

switch(day) {
    case "monday":
        workout="legs and triceps";
        break
    case "tuesday":
        workout="hand and shoulder";
        break
    case "wednesday":
        workout="running";
        break
    default:
        workout="yoga and rest";
}
console.log(`This day is ${workout}`);