function easterEggs(input) {
    let eggsToPaint = Number(input[0]);
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let mostCommon = "";
    let howManyTimes = 0;

    for(let color = 1; color <= eggsToPaint; color++) {
        let currentColor = input[color];
        if (currentColor === "red") {
            red++;
        } else if (currentColor === "orange") {
            orange++;
        } else if (currentColor === "blue") {
            blue++;
        } else if (currentColor === "green") {
            green++;
        }

        if (red > howManyTimes) {
            howManyTimes = red;
            mostCommon = currentColor;
        } else if (orange > howManyTimes) {
            howManyTimes = orange;
            mostCommon = currentColor;
        }
        else if (blue > howManyTimes) {
            howManyTimes = blue;
            mostCommon = currentColor;
        }
        else if (green > howManyTimes) {
            howManyTimes = green;
            mostCommon = currentColor;
        }
    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${howManyTimes} -> ${mostCommon}`);
}

easterEggs(["7","orange","blue","green","green","blue","red","green"]);
