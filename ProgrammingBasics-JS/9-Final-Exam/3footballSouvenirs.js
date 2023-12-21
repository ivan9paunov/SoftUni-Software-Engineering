function footballSouvenirs(input) {
    let footballTeam = input[0];
    let souvenirType = input[1];
    let totalPurchases = Number(input[2]);

    let price = 0;
    let error = false;

    switch (footballTeam) {
        case "Argentina": {
            switch (souvenirType) {
                case "flags"   : price = 3.25; break;
                case "caps"    : price = 7.20; break;
                case "posters" : price = 5.10; break;
                case "stickers": price = 1.25; break;
                default: console.log("Invalid stock!"); error = true; break;
            }
        }
        break;
        case "Brazil": {
            switch (souvenirType) {
                case "flags"   : price = 4.20; break;
                case "caps"    : price = 8.50; break;
                case "posters" : price = 5.35; break;
                case "stickers": price = 1.20; break;
                default: console.log("Invalid stock!"); error = true; break;
            }
        }
        break;
        case "Croatia": {
            switch (souvenirType) {
                case "flags"   : price = 2.75; break;
                case "caps"    : price = 6.90; break;
                case "posters" : price = 4.95; break;
                case "stickers": price = 1.10; break;
                default: console.log("Invalid stock!"); error = true; break;
            }
        }
        break;
        case "Denmark": {
            switch (souvenirType) {
                case "flags"   : price = 3.10; break;
                case "caps"    : price = 6.50; break;
                case "posters" : price = 4.80; break;
                case "stickers": price = 0.90; break;
                default: console.log("Invalid stock!"); error = true; break;
            }
        }
        break;
        default: console.log("Invalid country!"); error = true; break;
    }

    let totalPrice = totalPurchases * price;
    if (!error) {
        console.log(`Pepi bought ${totalPurchases} ${souvenirType} of ${footballTeam} for ${totalPrice.toFixed(2)} lv.`);
    }
        
}

footballSouvenirs(["Denmark", "caps", "8"]);