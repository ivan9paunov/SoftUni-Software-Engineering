function bonusScoringSystem(arr) {
    let numsArr = arr.map(Number);
    let numberOfStudents = numsArr.shift();
    let numberOfLectures = numsArr.shift();
    let bonus = numsArr.shift();

    let maxBonus = 0;
    let personalAttendance = 0;

    for (let student = 0; student < numberOfStudents; student++) {
        let studentAttendances = numsArr[student];
        let totalBonus = studentAttendances / numberOfLectures * (5 + bonus);
        
        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            personalAttendance = studentAttendances;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${personalAttendance} lectures.`);
}

bonusScoringSystem(
    ['5',  '25', '30',
     '12', '19', '24',
     '16', '20'
    ]
);