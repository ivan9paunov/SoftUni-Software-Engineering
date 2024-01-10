function timeToWalk(steps, footMeters, speed) {
    let distanceInMeters = steps * footMeters;
    let distanceInKm = distanceInMeters / 1000;
    let timeForRest = Math.floor(distanceInMeters / 500);

    let percentage = (distanceInKm / speed * 100) / 100;
    let sumOfTime = percentage * 60
    let minutes = Math.floor(sumOfTime);
    let restOfTime = (sumOfTime - minutes) * 10;
    let seconds = Math.round((restOfTime / 10) * 60);
    let hours = 0;
    
    minutes += timeForRest;
    
    if (minutes > 60) {
        hours = Math.floor(minutes / 60);
        minutes -= (hours * 60);
    }

    hours = hours.toString();
    if (hours < 10) {
        hours = 0 + hours;
    }

    minutes = minutes.toString();
    if (minutes < 10) {
        minutes = 0 + minutes;
    }

    seconds = seconds.toString();
    if (seconds < 10) {
        seconds = 0 + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);