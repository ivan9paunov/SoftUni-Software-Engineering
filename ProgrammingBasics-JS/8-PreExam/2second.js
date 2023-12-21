function secondExam(input) {
    let missingDays = Number(input[0]);
    let foodLeft = Number(input[1]);
    let foodPerDayForFirst = Number(input[2]);
    let foodPerDayForSecond = Number(input[3]);
    let foodPerDayForThird = Number(input[4]);

    let foodForFirst = missingDays * foodPerDayForFirst;
    let foodForSecond = missingDays * foodPerDayForSecond;
    let foodForThird = missingDays * foodPerDayForThird;

    let totalNeededFood = foodForFirst + foodForSecond + foodForThird;

    if (foodLeft >= totalNeededFood) {
        console.log(`${Math.floor(foodLeft - totalNeededFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalNeededFood - foodLeft)} more kilos of food are needed.`);
    }
}

secondExam(["5",
"10",
"2.1",
"0.8",
"11"])
;