function graduation(input){
    let index = 0;
    let name = input[index];
    index++;
    let sumOfGrades = 0;
    let sumOfBadGrades = 0;
    let classes = 1;

    let isExcluded = false;
    while(classes <= 12) {
        let grade = Number(input[index]);
        index++;
        if(grade < 4) {
            sumOfBadGrades++;
            if(sumOfBadGrades === 2) {
                console.log(`${name} has been excluded at ${classes} grade`);
                isExcluded = true;
                break;
            }
            continue;
        }
        sumOfGrades += grade;
        classes++;
    }
    if(!isExcluded) {
        let avgGrade = sumOfGrades / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}

graduation(["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]);