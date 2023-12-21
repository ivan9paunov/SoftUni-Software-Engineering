function mountainRun(input){
    let recordInMeters = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSeconds = Number(input[2]);
    let calculatedRecord = distanceInMeters * timeInSeconds;
    let resistance = Math.floor(distanceInMeters / 50) * 30;
    let personalRecord = calculatedRecord + resistance;
    if(personalRecord < recordInMeters){
        console.log(`Yes! The new record is ${personalRecord.toFixed(2)} seconds.`);
    } else if(personalRecord >= recordInMeters){
        console.log(`No! He was ${(personalRecord - recordInMeters).toFixed(2)} seconds slower.`);
    }
}

mountainRun(["5554.36","1340","3.23"]);