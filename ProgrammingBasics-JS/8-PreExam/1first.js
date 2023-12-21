function firstExam(input) {
    let fatsPercentage = Number(input[0]);
    let energyPercentage = Number(input[1]);
    let carbsPercentage = Number(input[2]);
    let totalCalories = Number(input[3]);
    let waterPercentage = Number(input[4]);

    let oneGramFats = 9;
    let oneGramEnergy = 4;
    let oneGramCarbs = 4;

    let totalFats = (totalCalories * (fatsPercentage / 100)) / oneGramFats;
    let totalEnergy = (totalCalories * (energyPercentage / 100)) / oneGramEnergy;
    let totalCarbs = (totalCalories * (carbsPercentage / 100)) / oneGramCarbs;
    let foodInGrams = totalFats + totalEnergy + totalCarbs;
    let caloriesPerGram = totalCalories / foodInGrams;
    let water = 100 - waterPercentage;
    let result = caloriesPerGram * (water / 100);
    console.log(result.toFixed(4));
}

firstExam(["60",
"25",
"15",
"2500",
"60"]);