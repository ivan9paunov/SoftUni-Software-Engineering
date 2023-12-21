function suitcasesLoad(input) {
    let index = 0;
    let trunkCapacity = Number(input[index]);
    index++;
    let command = input[index];
    let currentCapacity = 0;
    let suitcases = 0;

    while (command !== "End") {
        let suitcaseCapacity = Number(command);
        currentCapacity += suitcaseCapacity;
        if(currentCapacity >= trunkCapacity) {
            break;
        }
        suitcases ++;
        index++;
        command = input[index];
    }

    if (trunkCapacity > currentCapacity) {
        console.log(`Congratulations! All suitcases are loaded!`);
    } else {
        console.log("No more space!");
    }
    console.log(`Statistic: ${suitcases} suitcases loaded.`);
}

suitcasesLoad(["700.5","180","340.6","126","220"]);