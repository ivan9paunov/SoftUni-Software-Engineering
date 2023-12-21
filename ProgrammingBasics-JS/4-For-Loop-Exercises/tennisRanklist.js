function tennisRanklist(input){
    let tournamentsCount = Number(input[0]);
    let points = Number(input[1]);
    let winPoints = 0;
    let finalistPoints = 0;
    let semifPoints = 0;
    let wins = 0;
    for(i = 2; i <= input.length; i++){
        let stage = input[i];
        switch(stage){
            case "W" : 
            points += 2000;
            winPoints += 2000; 
            wins++;
            break;
            case "F" : 
            points += 1200; 
            finalistPoints += 1200;
            break;
            case "SF": 
            points += 720; 
            semifPoints += 720;
            break;
        }
    }
    let averagePoints = (winPoints + finalistPoints + semifPoints) / tournamentsCount;
    
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${((wins / tournamentsCount) * 100).toFixed(2)}%`);
}

tennisRanklist(["5","1400","F","SF","W","W","SF"]);