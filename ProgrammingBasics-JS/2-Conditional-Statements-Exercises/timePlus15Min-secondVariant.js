function timePlus15Min(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]) + 15;
    
    let timeInMinutes = (hours * 60) + minutes;
    let newHours = Math.floor(timeInMinutes / 60);
    let newMinutes = timeInMinutes % 60;

    if (newHours >= 24) {
        newHours -= 24;
    }
    
    if (newMinutes < 10) {
        console.log(`${newHours}:0${newMinutes}`);
    } else {
        console.log(`${newHours}:${newMinutes}`);   
    } 
}

timePlus15Min(["23", "49"]);