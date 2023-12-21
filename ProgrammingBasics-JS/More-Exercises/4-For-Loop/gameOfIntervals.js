function gameOfIntervals(input){
    let howManyTimes = Number(input[0]);
    let zeroToNine = 0;
    let tenTo19 = 0;
    let twentyTo29 = 0;
    let thirtyTo39 = 0;
    let fourtyToFifty = 0;
    let invalidNumber = 0;
    let totalPoints = 0;

    for (number = 1; number <= howManyTimes; number++) {
        let currentNumber = Number(input[number]);
        
        if (currentNumber < 0 || currentNumber > 50) {
            invalidNumber++;
            totalPoints /= 2;
        } else if (currentNumber < 10){
            zeroToNine++;
            totalPoints += currentNumber * 0.20;
        } else if (currentNumber < 20) {
            tenTo19++;
            totalPoints += currentNumber * 0.30;
        } else if (currentNumber < 30) {
            twentyTo29++;
            totalPoints += currentNumber * 0.40;
        } else if (currentNumber < 40) {
            thirtyTo39++;
            totalPoints += 50;
        } else if (currentNumber <= 50) {
            fourtyToFifty++;
            totalPoints += 100;
        } 
    }

    console.log(totalPoints.toFixed(2));
    console.log(`From 0 to 9: ${(zeroToNine / howManyTimes * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(tenTo19 / howManyTimes * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(twentyTo29 / howManyTimes * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(thirtyTo39 / howManyTimes * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(fourtyToFifty / howManyTimes * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNumber / howManyTimes * 100).toFixed(2)}%`);
}

gameOfIntervals(["10","43","57","-12","23","12","0","50","40","30","20"]);