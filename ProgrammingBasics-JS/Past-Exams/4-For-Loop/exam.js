function exam(input) {
    let students = Number(input[0]);

    let topStudents = 0;
    let fourTofive = 0;
    let threeToFour = 0;
    let fail = 0;
    let totalScore = 0;

    for (let student = 1; student <= students; student++) {
        let currentGrade = Number(input[student]);
        if (currentGrade >= 5.00) {
            topStudents++;
        } else if (currentGrade >= 4.00) {
            fourTofive++;
        } else if (currentGrade >= 3.00) {
            threeToFour++;
        } else {
            fail++;
        }

        totalScore = totalScore + currentGrade;
    }

    console.log(`Top students: ${((topStudents / students) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((fourTofive / students) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((threeToFour / students) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((fail / students) * 100).toFixed(2)}%`);

    let average = totalScore / students;
    console.log(`Average: ${average.toFixed(2)}`);
}

exam(["6","2.00","3.00","4.00","5.00","6.00","2.20"]);