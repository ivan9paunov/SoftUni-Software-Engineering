function suitcasesLoad(input) {
    let index = 0;
    let trunkCapacity = Number(input[index]);
    index++;
    let command = input[index];
    
    let suitcases = 0;
    let notLoaded = false;

    while (command !== "End") {
        let currentLuggage = Number(command);
        if (index % 3 === 0) {
            currentLuggage *= 1.10;
        }
        if (currentLuggage > trunkCapacity) {
            notLoaded = true;
            break;
        }
        trunkCapacity -= currentLuggage;
        suitcases++;
        index++;
        command = input[index];
    }
    if (!notLoaded) {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${suitcases} suitcases loaded.`);
    } else {
        console.log("No more space!");
        console.log(`Statistic: ${suitcases} suitcases loaded.`);
    }
}

// suitcasesLoad(["550","100","252","72","End"]);
suitcasesLoad(["700.5","180","340.6","126","220"]);