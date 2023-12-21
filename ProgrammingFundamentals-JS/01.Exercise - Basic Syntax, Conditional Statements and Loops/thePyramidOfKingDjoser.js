function thePyramidOfKingDjoser(base, increment) {
    let floors = Math.ceil(base / 2);
    
    let currentFloor = 0;

    let currentStone = 0;
    let totalStone = 0;
    let currentMarble = 0;
    let totalMarble = 0;
    let currentLapis = 0;
    let totalLapis = 0;
    let gold = 0;

    for (let step = base; step >= 1; step -= 2) {
        currentFloor++;
        if(currentFloor == floors) {
            gold = Math.pow(step, 2);
            break;
        } else if (currentFloor % 5 == 0) {
            currentStone = Math.pow(step - 2, 2);
            currentLapis = Math.pow(step, 2) - currentStone;
            totalStone += currentStone;
            totalLapis += currentLapis;
        } else {
            currentStone = Math.pow(step - 2, 2);
            currentMarble = Math.pow(step, 2) - currentStone;
            totalStone += currentStone;
            totalMarble += currentMarble;
        }
    }
    
    let stoneRequired = Math.ceil(totalStone * increment);
    let marbleRequired = Math.ceil(totalMarble * increment);
    let lapisRequired = Math.ceil(totalLapis * increment);
    let goldRequired = Math.ceil(gold * increment);

    console.log(`Stone required: ${stoneRequired}`);
    console.log(`Marble required: ${marbleRequired}`);
    console.log(`Lapis Lazuli required: ${lapisRequired}`);
    console.log(`Gold required: ${goldRequired}`);
    console.log(`Final pyramid height: ${Math.floor(floors * increment)}`);
}

// thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
// thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);