function moving(input) {
    let index = 0;
    let roomWidth = Number(input[index]);
    index++;
    let roomLength = Number(input[index]);
    index++;
    let roomHeigth = Number(input[index]);
    index++;
    let roomSize = roomWidth * roomLength * roomHeigth;
    let sumOfBoxes = 0;
    let step = input[index];
    index++;
    
    while(step !== "Done") {
        sumOfBoxes += Number(step);
        if(sumOfBoxes >= roomSize) {
            break;
        }
        step = input[index];
        index++;
    } 
    if(sumOfBoxes >= roomSize) {
        console.log(`No more free space! You need ${sumOfBoxes - roomSize} Cubic meters more.`);
    } else {
        console.log(`${roomSize - sumOfBoxes} Cubic meters left.`);
    }
}

// moving(["10","10","2","20","20","20","20","122"]);
moving(["10","1","2","4","6","Done"]);

