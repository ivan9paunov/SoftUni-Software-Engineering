function bills(input){
    let totalMonths = Number(input[0]);
    let electricityBills = 0;
    let monthlyWaterBills = 20;
    let waterBills = monthlyWaterBills * totalMonths;
    let monthlyInternetBills = 15;
    let internetBills = monthlyInternetBills * totalMonths;
    let monthlyOtherBills = 0;

    for (month = 1; month <= totalMonths; month++) {
        let currentMonth = Number(input[month]);
        electricityBills += currentMonth;
        monthlyOtherBills += (currentMonth + monthlyWaterBills + monthlyInternetBills) * 1.20;
    }

    let averageForMonth = (electricityBills + waterBills + internetBills + monthlyOtherBills) / totalMonths;
    console.log(`Electricity: ${electricityBills.toFixed(2)} lv`);
    console.log(`Water: ${waterBills.toFixed(2)} lv`);
    console.log(`Internet: ${internetBills.toFixed(2)} lv`);
    console.log(`Other: ${monthlyOtherBills.toFixed(2)} lv`);
    console.log(`Average: ${averageForMonth.toFixed(2)} lv`);
}

bills(["5","68.63","89.25","132.53","93.53","63.22"]);