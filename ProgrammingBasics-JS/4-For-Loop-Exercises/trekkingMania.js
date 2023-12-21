function trekkingMania(input){
    let groupsOfClimbers = Number(input[0]);
    let g1 = 0;
    let g2 = 0;
    let g3 = 0;
    let g4 = 0;
    let g5 = 0;
    let totalClimbers = 0;

    for(i = 1; i <= groupsOfClimbers; i++){
        let peopleInGroup = input[i];
        let everyGroup = Number(input[i]);
        totalClimbers += everyGroup;
        if(peopleInGroup <= 5){
            g1 += Number(input[i]);
        } else if(peopleInGroup <= 12){
            g2 += Number(input[i]);
        } else if(peopleInGroup <= 25){
            g3 += Number(input[i]);
        } else if(peopleInGroup <= 40){
            g4 += Number(input[i]);
        } else {
            g5 += Number(input[i]);
        }
    }
    console.log(`${(g1 / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(g2 / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(g3 / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(g4 / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(g5 / totalClimbers * 100).toFixed(2)}%`);
}

trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"])