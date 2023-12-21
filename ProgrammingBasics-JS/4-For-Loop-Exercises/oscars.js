function oscars(input){
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let ratingPeople = Number(input[2]);

    for(let i = 3; i < input.length; i++){
        if(i % 2 !== 0){
            let ratingPoints = i + 1;
            let total = input[i].length * Number(input[ratingPoints] / 2);
            startingPoints += total;
        } 
        if(startingPoints > 1250.5) {
            break;
        }
    }
    if(startingPoints > 1250.5){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
    } else {
    console.log(`Sorry, ${actorName} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);