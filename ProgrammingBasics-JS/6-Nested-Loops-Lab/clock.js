function clock() {
    for (let hours = 0; hours <= 23; hours++){
        for (let minutes = 0; minutes <= 59; minutes++){
            if (minutes < 10) {
                console.log(`${hours}:0${minutes}`);
            } else {
                console.log(`${hours}:${minutes}`);
            }
        }
    }
}

clock();