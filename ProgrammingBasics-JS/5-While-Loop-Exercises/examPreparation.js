function examPreparation(input) {
    let index = 0;
    let allowedMistakes = Number(input[index]);
    index++;

    let goodGrades = 0;
    let unsuccessfullTry = 0;
    let sumOfGrades = 0;
    let lastExam = "";
    let hasFailed = false;

    while(unsuccessfullTry <= allowedMistakes) {
        if(input[index] === "Enough") {
            break;
        }
        let currentExam = input[index];
        lastExam = currentExam;
        index++;
        let currentGrade = Number(input[index]);
        goodGrades++;
        index++;
        if(currentGrade <= 4) {
            unsuccessfullTry++;
            if(unsuccessfullTry === allowedMistakes) {
                hasFailed = true;
                break;
            }
        }
        sumOfGrades += currentGrade;
    }
    if(!hasFailed){
        console.log(`Average score: ${(sumOfGrades / goodGrades).toFixed(2)}`);
        console.log(`Number of problems: ${goodGrades}`);
        console.log(`Last problem: ${lastExam}`);
    } else {
        console.log(`You need a break, ${unsuccessfullTry} poor grades.`);
    }
}

examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);
