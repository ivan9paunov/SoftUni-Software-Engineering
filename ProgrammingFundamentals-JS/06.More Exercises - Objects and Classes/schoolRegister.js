function schoolRegister(studentsInput) {
    let school = {};

    for (let student of studentsInput) {
        let [nameInfo, gradeInfo, avgInfo] = student.split(', ');
        let [nameDescr, name] = nameInfo.split(': ');
        let [gradeDescr, grade] = gradeInfo.split(': ');
        grade = Number(grade);
        let [avgDescr, avg] = avgInfo.split(': ');
        avg = Number(avg);

        if (avg >= 3) {
            if (grade + 1 in school) {
                school[grade + 1].students.push(name);
                school[grade + 1].grades.push(avg);
            } else {
                let students = [];
                let grades = [];
                school[grade + 1] = {students, grades};
                school[grade + 1].students.push(name);
                school[grade + 1].grades.push(avg);
            }
        }
    }

    let kvpSchool = Object.entries(school);
    let counterForTheEmptyRow = 0;

    for (let classes of kvpSchool) {
        counterForTheEmptyRow++;
        console.log(`${classes[0]} Grade`);
        let classValues = Object.values(classes[1]);
        let [students, grades] = classValues;
        let total = grades.reduce((sum, val) => sum + val, 0);
        let avg = total / grades.length;
        console.log(`List of students: ${students.join(', ')}`);
        console.log(`Average annual score from last year: ${avg.toFixed(2)}`);
        if (counterForTheEmptyRow < kvpSchool.length) {
            console.log('');
        }
    }
}

schoolRegister(
    [
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90", 
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15", 
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95", 
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00", 
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05", 
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88", 
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00" 
    ]
);