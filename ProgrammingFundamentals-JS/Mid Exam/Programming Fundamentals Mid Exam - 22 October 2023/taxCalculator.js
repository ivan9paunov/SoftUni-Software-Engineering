function taxCalculator(inputArr) {
    let vehicles = inputArr.shift().split('>>');

    let totalTax = 0;

    for (let car of vehicles) {
        let carInfo = car.split(' ');
        let carType = carInfo.shift();
        let yearsToPay = carInfo.shift();
        let km = carInfo.shift();

        let familyTypeTax = 50;
        let heavyDutyTypeTax = 80;
        let sportsTypeTax = 100;

        if (carType == 'family') {
            familyTypeTax -= yearsToPay * 5;
            let kmTax = Math.floor(km / 3000);
            familyTypeTax += kmTax * 12;
            totalTax += familyTypeTax;
            console.log(`A ${carType} car will pay ${familyTypeTax.toFixed(2)} euros in taxes.`);
        } else if (carType == 'heavyDuty') {
            heavyDutyTypeTax -= yearsToPay * 8;
            let kmTax = Math.floor(km / 9000);
            heavyDutyTypeTax += kmTax * 14;
            totalTax += heavyDutyTypeTax;
            console.log(`A ${carType} car will pay ${heavyDutyTypeTax.toFixed(2)} euros in taxes.`);
        } else if (carType == 'sports') {
            sportsTypeTax -= yearsToPay * 9;
            let kmTax = Math.floor(km / 2000);
            sportsTypeTax += kmTax * 18;
            totalTax += sportsTypeTax;
            console.log(`A ${carType} car will pay ${sportsTypeTax.toFixed(2)} euros in taxes.`);
        } else {
            console.log('Invalid car type.');
            continue;
        }
    }

    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
}

// taxCalculator([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]);
taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]);