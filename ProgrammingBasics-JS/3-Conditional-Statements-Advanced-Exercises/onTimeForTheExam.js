function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);
    let examTimeInMinutes = examHour * 60 + examMinutes;
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinutes;
    let timeDifference = examTimeInMinutes - arrivalTimeInMinutes;
    let timeStatus = "";
    if(timeDifference >= 0 && timeDifference <=30) {
        timeStatus = "On time";
    } else if(timeDifference < 0){
        timeStatus = "Late";
    } else {
        timeStatus = "Early";
    }
    console.log(timeStatus);

    let timeInMinutes = 0;
    let exactHour = 0;
    let exactMinute = 0;
    if(timeStatus === "On time"){
        timeInMinutes = examTimeInMinutes - arrivalTimeInMinutes;
        console.log(`${timeInMinutes} minutes before the start`);
    } else if(timeStatus === "Late"){
        timeInMinutes = arrivalTimeInMinutes - examTimeInMinutes;
        if(timeInMinutes >= 60) {
            exactHour = Math.floor(timeInMinutes / 60);
            exactMinute = timeInMinutes % 60;
                if(exactMinute <= 9){
                    console.log(`${exactHour}:0${exactMinute} hours after the start`);
                } else {
                    console.log(`${exactHour}:${exactMinute} hours after the start`);
                }
        } else {
            console.log(`${timeInMinutes} minutes after the start`);
        }
    } else if(timeStatus === "Early") {
        timeInMinutes = examTimeInMinutes - arrivalTimeInMinutes;
        if(timeInMinutes >= 60) {
            exactHour = Math.floor(timeInMinutes / 60);
            exactMinute = timeInMinutes % 60;
                if(exactMinute <= 9){
                    console.log(`${exactHour}:0${exactMinute} hours before the start`);
                } else {
                    console.log(`${exactHour}:${exactMinute} hours before the start`);
                }
        } else {
            console.log(`${timeInMinutes} minutes before the start`);
        }
    }
}

onTimeForTheExam(["8","12","11","30"]);