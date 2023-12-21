function moon(input) {
    let avgSpeed = Number(input[0]);
    let fuelNeeded = Number(input[1]);

    let distance = 384400 * 2;
    let time = Math.ceil(distance / avgSpeed);
    let totalTime = time + 3;
    let fuel = (fuelNeeded * distance) / 100;
    console.log(totalTime);
    console.log(fuel);

    
}

moon(["10000", "5"]);