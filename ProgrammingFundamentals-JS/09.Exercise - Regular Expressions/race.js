function race(inputArr) {
    let competitors = inputArr.shift();
    let raceResults = {};

    let wordPattern = /[A-Za-z]/gm;
    let numPattern = /[0-9]/gm;

    let command = inputArr.shift();
    
    while (command != 'end of race') {
        let name = command.match(wordPattern).join('');
        let time = command.match(numPattern).map(Number).reduce((acc, count) => acc + count);
        
        if (competitors.includes(name)) {
            if (name in raceResults) {
                raceResults[name] += time;
            } else {
                raceResults[name] = time;
            }
        }
        
        
        command = inputArr.shift();
    }

    let kvpRaceResults = Object.entries(raceResults).sort((a, b) => b[1] - a[1]);
    let topThree = ['1st', '2nd', '3rd'];
    
    for (let competitor = 0; competitor < 3; competitor++) {
        let [name, result] = kvpRaceResults[competitor];
        console.log(`${topThree[competitor]} place: ${name}`);
    }

}

race(
    [
        'George, Peter, Bill, Tom',
        'G4e@55or%6g6!68e!!@ ',
        'R1@!3a$y4456@',
        'B5@i@#123ll',
        'G@e54o$r6ge#',
        '7P%et^#e5346r',
        'T$o553m&6',
        'end of race'
    ]
);

// race(
//     [
//         'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
//         'Mi*&^%$ch123o!#$%#nne787) ',
//         '%$$B(*&&)i89ll)*&) ',
//         'R**(on%^&ald992) ',
//         'T(*^^%immy77) ',
//         'Ma10**$#g0g0g0i0e',
//         'end of race'
//     ]
// );