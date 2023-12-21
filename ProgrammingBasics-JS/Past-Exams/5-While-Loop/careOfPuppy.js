function careOfPuppy(input) {
    let index = 0;
    let foodInKG = input[index];
    index ++;
    let foodInGrams = foodInKG * 1000;
    let command = input[index];
    while (command !== "Adopted") {
        let currentFood = Number(command);
        foodInGrams -= currentFood;
        index++;
        command = input[index];
    }
    if (foodInGrams >= 0) {
        console.log(`Food is enough! Leftovers: ${foodInGrams} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(foodInGrams)} grams more.`);
    }
}

// careOfPuppy(["4","130","345","400","180","230","120","Adopted"]);
// careOfPuppy(["3","1000","1000","1000","Adopted"]);
careOfPuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"]);


