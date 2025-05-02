const user= {
    preference : {
        exercise: {
            intensity:"govinda"
        }
    }
};
const intensity=user.preference?.exercise?.intensity ?? "moderate";
console.log(`exercise.intensity:${intensity}`);
