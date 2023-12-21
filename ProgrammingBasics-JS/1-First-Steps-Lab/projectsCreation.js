function projectsCreation(input) {
    let personName = input[0];
    let projectsNumber = Number(input[1]);
    let hoursNeeded = projectsNumber * 3;
    console.log(`The architect ${personName} will need ${hoursNeeded} hours to complete ${projectsNumber} project/s.`);
}

projectsCreation(["Ivan", 6]);