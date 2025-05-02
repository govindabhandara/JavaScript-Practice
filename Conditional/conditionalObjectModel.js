const workoutPlan= {
    cardio:["running","cycyling","swimming"],
    strength:["weight_lifting","body_exercise"],
    getExercise(type) {
    return type ? this[type]: ["this cardio","this-strength"];
    }
};
console.log(workoutPlan.getExercise("cardio"));
console.log(workoutPlan.getExercise());

