function darts(input) {
    let index = 0;
    let player = input[index];
    index++;
    let command = input[index];

    let startingPoints = 301;
    let shots = 0;
    let unsuccessfulShots = 0;

    while (command !== "Retire") {
        index++;
        let score = Number(input[index]);
        
        if (command === "Triple") {
            if ((score * 3) > startingPoints) {
                unsuccessfulShots++;
                index++;
                command = input[index];
                continue;
            } else {
                startingPoints = startingPoints - (score * 3);
                shots++;
            }
        } else if (command === "Double") {
            if ((score * 2) > startingPoints) {
                unsuccessfulShots++;
                index++;
                command = input[index];
                continue;
            } else {
                startingPoints = startingPoints - (score * 2);
                shots++;
            }
        } else if (command === "Single") {
            if (score > startingPoints) {
                unsuccessfulShots++;
                index++;
                command = input[index];
                continue;
            } else {
                startingPoints = startingPoints - score;
                shots++;
            }
        }

        if (startingPoints === 0) {
            console.log(`${player} won the leg with ${shots} shots.`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "Retire") {
        console.log(`${player} retired after ${unsuccessfulShots} unsuccessful shots.`);
    }
}

// darts(["Michael van Gerwen","Triple","20","Triple","19","Double","10",
//      "Single","3","Single","1","Triple","20","Triple","20","Double","20"]);
// darts(["Stephen Bunting","Triple","20","Triple","20","Triple","20","Triple","20",
// "Triple","20","Triple","20","Double","7","Single","12","Double","1","Single","1"]);
darts(["Rob Cross","Triple","20","Triple","20","Triple","20","Triple","20",
     "Double","20","Triple","20","Double","5","Triple","10","Double","6","Retire"]);