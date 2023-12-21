function catWalking(input){
    let minutesOfWalking = Number(input[0]);
    let walkingTimes = Number(input[1]);
    let catCalories = Number(input[2]);
    let totalMinutes = minutesOfWalking * walkingTimes;
    let caloriesBurned = totalMinutes * 5;
    let calories = catCalories * 0.5;
    if(caloriesBurned >= calories){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else if(calories > caloriesBurned){
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }
}

catWalking(["40","2","300"]);