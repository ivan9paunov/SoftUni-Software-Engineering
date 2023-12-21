function schoolGrades(inputArr) {
    let gradesBook = {};

    for (let student of inputArr) {
        let studentInformation = student.split(' ');
        let studentName = studentInformation.shift();
        let grades = studentInformation.map(Number);
        
        if (!(gradesBook.hasOwnProperty(studentName))) {
            gradesBook[studentName] = grades;
        } else {
            grades.forEach(el => gradesBook[studentName].push(el));
        }
    }

    let entries = Object.entries(gradesBook);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let entry of entries) {
        let studentName = entry[0];
        let grades = entry[1];
        let sumOfGrades = 0;
        grades.forEach(grade => sumOfGrades += grade);
        let averageGrades = sumOfGrades / grades.length;

        console.log(`${studentName}: ${averageGrades.toFixed(2)}`);
    }
}

schoolGrades(
    [
        'Lilly 4 6 6 5',
        'Tim 5 6',
        'Tammy 2 4 3',
        'Tim 6 6'
    ]
);

// schoolGrades(
//     [
//         'Steven 3 5 6 4',
//         'George 4 6',
//         'Tammy 2 5 3',
//         'Steven 6 3'
//     ]
// );