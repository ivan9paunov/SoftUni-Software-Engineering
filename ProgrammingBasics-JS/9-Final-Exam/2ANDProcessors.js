function ANDProcessors(input) {
    let processorsToMake = Number(input[0]);
    let employees = Number(input[1]);
    let workingDays = Number(input[2]);
    
    let totalHours = employees * workingDays * 8;
    let processorsMade = Math.floor(totalHours / 3);

    if (processorsToMake > processorsMade) {
        console.log(`Losses: -> ${((processorsToMake - processorsMade) * 110.10).toFixed(2)} BGN`);
    } else if (processorsMade >= processorsToMake){
        console.log(`Profit: -> ${((processorsMade - processorsToMake) * 110.10).toFixed(2)} BGN`);
    }
}

ANDProcessors(["500", "8", "20"]);