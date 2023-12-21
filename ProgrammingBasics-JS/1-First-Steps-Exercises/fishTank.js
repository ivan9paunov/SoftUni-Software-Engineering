function fishTank(input) {
    let tankLength = Number(input[0]);
    let tankWidth = Number(input[1]);
    let tankHeight = Number(input[2]);
    let percentageDecoration = Number(input[3]);
    let tankCapacity = (tankLength * tankWidth * tankHeight) / 1000;
    let filledWithWater = tankCapacity - (tankCapacity * (percentageDecoration / 100));
    console.log(filledWithWater);
}

fishTank(["85", "75", "47", "17"]);