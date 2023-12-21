function hospital(input){
    let threatmentPeriod = Number(input[0]);
    let doctors = 7;
    let treated = 0;
    let untreated = 0;
    for(let i = 1; i <= threatmentPeriod; i++){
        let patients = Number(input[i]);
        if(i % 3 === 0 && untreated > treated){
            doctors++;
        }
        if(patients <= doctors){
            treated += patients;
        } else {
            treated += doctors;
            untreated += patients - doctors;
        }
    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}

hospital(["4","7","27","9","1"]);