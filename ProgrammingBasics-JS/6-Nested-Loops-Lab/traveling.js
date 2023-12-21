function traveling(input) {
    let index = 0;
    command = input[index];
    index++;

    let collectedSum = 0;
    let destination = "";

    while (command !== "End") {
        let neededSum = Number(input[index]);
        index++;
        while (collectedSum < neededSum) {
            let currentSum = Number(input[index]);
            index++;
            collectedSum += currentSum;
            destination = command;
            continue;
        }
        console.log(`Going to ${destination}!`);
        collectedSum = 0;
        command = input[index];
        index++;
    }
}

// traveling(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"]);
traveling(["France","2000","300","300","200","400","190","258","360","Portugal","1450","400","400","200","300","300","Egypt","1900","1000","280","300","500","End"]);

