function trainTheTrainers(input) {
    let index = 0;
    let juryPeople = Number(input[index]);
    index++;
    let command = input[index];
    let finalGrade = 0;
    let totalGrades = 0;

    while (command !== "Finish") {
        let currentSubject = command;
        index++;
        let averageGrade = 0;
        for (let grades = 1; grades <= juryPeople; grades++) {
            let currentGrade = Number(input[index]);
            index++;
            averageGrade += currentGrade;
            totalGrades++;
        }
        finalGrade += averageGrade;
        command = input[index];
        console.log(`${currentSubject} - ${(averageGrade / juryPeople).toFixed(2)}.`); 
    }
    console.log(`Student's final assessment is ${((finalGrade / totalGrades).toFixed(2))}.`);
}

// trainTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"]);
trainTheTrainers(["3","Arrays","4.53","5.23","5.00","Lists","5.83","6.00","5.42","Finish"]);

