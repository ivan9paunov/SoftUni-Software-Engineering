function fitnessCenter(input) {
    let customers = Number(input[0]);

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let shake = 0;
    let bar = 0;
    let workOut = 0;
    let shop = 0;

    for (let activity = 1; activity <= customers; activity++) {
        let currentActivity = input[activity];
        switch (currentActivity) {
            case "Back"         : back++; workOut++; break;
            case "Chest"        : chest++; workOut++; break;
            case "Legs"         : legs++; workOut++; break;
            case "Abs"          : abs++; workOut++; break;
            case "Protein shake": shake++; shop++; break;
            case "Protein bar"  : bar++; shop++; break;
        }
    }

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${shake} - protein shake`);
    console.log(`${bar} - protein bar`);
    console.log(`${((workOut / customers) * 100).toFixed(2)}% - work out`);
    console.log(`${((shop / customers) * 100).toFixed(2)}% - protein`);
}

// fitnessCenter(["10","Back","Chest","Legs","Abs","Protein shake","Protein bar","Protein shake",
//                 "Protein bar","Legs","Abs"]);
fitnessCenter(["7","Chest","Back","Legs","Legs","Abs","Protein shake","Protein bar"]);