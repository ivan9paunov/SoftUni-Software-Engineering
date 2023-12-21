function vetParking(input) {
    let days = Number(input[0]);
    let hoursToStay = Number(input[1]);

    let currentDay = 0;
    let totalTax = 0;

    for (let day = 1; day <= days; day++) {
        let dailyTax = 0;
        for (let hour = 1; hour <= hoursToStay; hour++) {
            if (day % 2 === 0 && hour % 2 !== 0) {
                dailyTax += 2.50;
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                dailyTax += 1.25;
            } else {
                dailyTax += 1;
            }
        }
        currentDay++;
        totalTax += dailyTax;
        console.log(`Day: ${currentDay} - ${dailyTax.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalTax.toFixed(2)} leva`);
}

// vetParking(["2","5"]);
vetParking(["5","2"]);