function fourthExam(input) {
    let index = 0;
    let totalDays = Number(input[index]);
    index++;

    let totalRakia = 0;
    let totalLiters = 0;

    for (let days = 1; days <= totalDays; days++) {
        let liters = Number(input[index]);
        index++;
        let degreece = Number(input[index]);
        index++;
        let rakiaPerDay = liters * degreece;
        totalLiters += liters;
        totalRakia += rakiaPerDay
    }
    let average = totalRakia / totalLiters;
    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${average.toFixed(2)}`);
    if (average < 38) {
        console.log("Not good, you should baking!");
    } else if (average < 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
}

fourthExam(["3",
"100",
"45",
"50",
"55",
"150",
"36"])
;