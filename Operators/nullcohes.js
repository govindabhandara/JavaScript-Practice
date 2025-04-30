// const user = {profile:{name:'govinda'}};
// console.log(user?.profile?.name);
// console.log(user?.city?.address??"unknown");
// console.log(user?.age?.date??"unknown");

const user={profile:{name:'romu'}};
console.log(user?.profile?.name);
console.log(user?.profile?.city??"unknown");
console.log(user?.dob?.age??"24");
