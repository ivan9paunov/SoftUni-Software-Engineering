function grades(input){
    let totalStudents = Number(input[0]);
    let twoToThree = 0;
    let threeToFour = 0;
    let fourToFive = 0;
    let fiveToSix = 0;
    let sumOfGrades = 0;

    for (student = 1; student <= totalStudents; student++) {
        singleStudentGrade = Number(input[student]);
        sumOfGrades += singleStudentGrade;
        if (singleStudentGrade < 3.00) {
            twoToThree++;
        } else if (singleStudentGrade < 4.00) {
            threeToFour++;
        } else if (singleStudentGrade < 5.00) {
            fourToFive++;
        } else {
            fiveToSix++;
        }
    }
    console.log(`Top students: ${(fiveToSix / totalStudents * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(fourToFive / totalStudents * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(threeToFour / totalStudents * 100).toFixed(2)}%`);
    console.log(`Fail: ${(twoToThree / totalStudents * 100).toFixed(2)}%`);
    console.log(`Average: ${(sumOfGrades / totalStudents).toFixed(2)}`);
}

grades(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"]);