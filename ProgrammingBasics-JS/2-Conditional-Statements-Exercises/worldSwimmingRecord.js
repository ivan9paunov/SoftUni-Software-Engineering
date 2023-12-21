function worldSwimmingRecord(input) {
    let worldRecordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsForOneMeter = Number(input[2]);
    let expectedTime = distanceInMeters * timeInSecondsForOneMeter;
    let losedTime = Math.floor(distanceInMeters / 15) * 12.5;
    let personalTime = expectedTime + losedTime;
    if (personalTime < worldRecordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${personalTime.toFixed(2)} seconds.`);
    } else {
    console.log(`No, he failed! He was ${(personalTime - worldRecordInSeconds).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["55555.67","3017","5.03"]);