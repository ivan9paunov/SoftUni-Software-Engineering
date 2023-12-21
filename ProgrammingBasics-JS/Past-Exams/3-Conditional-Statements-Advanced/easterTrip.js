function easterTrip(input) {
    let destination = input[0];
    let dates = input[1];
    let overnights = Number(input[2]);
    let price = 0;
    switch (destination){
        case "France" :
            switch (dates) {
                case "21-23": price = overnights * 30; break;
                case "24-27": price = overnights * 35; break;
                case "28-31": price = overnights * 40; break;
            }
        break;
        case "Germany":
            switch (dates) {
                case "21-23": price = overnights * 32; break;
                case "24-27": price = overnights * 37; break;
                case "28-31": price = overnights * 43; break;
            }
        break;
        case "Italy"  :
            switch (dates) {
                case "21-23": price = overnights * 28; break;
                case "24-27": price = overnights * 32; break;
                case "28-31": price = overnights * 39; break;
            }
        break;
    }
    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
}

easterTrip(["Italy","21-23","7"]);
