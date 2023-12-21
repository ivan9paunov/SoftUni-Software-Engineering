function fifthExam(input) {
    let index = 0;
    let command = input[index];
    index++;

    let days = 1;
    let totalMeters = 5364;
    while(command !== "END") {
        if (command === "Yes") {
            days++;
        }
        if (days > 5) {
            break;
        }
        let metersClimbed = Number(input[index]);
        index++;
        
        totalMeters += metersClimbed;
        
        if (totalMeters >= 8848) {
            break;
        }


        command = input[index];
        index++;

    }
    
    if (totalMeters >= 8848) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log("Failed!");
        console.log(totalMeters);
    }
}

fifthExam(["Yes",
"100",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"]);