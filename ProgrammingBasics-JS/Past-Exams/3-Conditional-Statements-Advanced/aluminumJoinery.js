function aluminumJoinery(input) {
    let joineryCount = Number(input[0]);
    let joinerySize = input[1];
    let deliveryType = input[2];
    let deliveryPrice = 60;
    let joineryPrice = 0;
    let finalPrice = 0;

    switch (joinerySize) {
        case "90X130":
            joineryPrice = 110; {
                if (joineryCount > 60) {
                    finalPrice = joineryPrice * joineryCount * 0.92;
                } else if (joineryCount > 30) {
                    finalPrice = joineryPrice * joineryCount * 0.95;
                } else {
                    finalPrice = joineryPrice * joineryCount;
                }
            }
            break;
        case "100X150":
            joineryPrice = 140; {
                if (joineryCount > 80) {
                    finalPrice = joineryPrice * joineryCount * 0.90;
                } else if (joineryCount > 40) {
                    finalPrice = joineryPrice * joineryCount * 0.94;
                } else {
                    finalPrice = joineryPrice * joineryCount;
                }
            }
            break;
        case "130X180":
            joineryPrice = 190; {
                if (joineryCount > 50) {
                    finalPrice = joineryPrice * joineryCount * 0.88;
                } else if (joineryCount > 20) {
                    finalPrice = joineryPrice * joineryCount * 0.93;
                } else {
                    finalPrice = joineryPrice * joineryCount;
                }
            }
            break;
        case "200X300":
            joineryPrice = 250; {
                if (joineryCount > 50) {
                    finalPrice = joineryPrice * joineryCount * 0.86;
                } else if (joineryCount > 25) {
                    finalPrice = joineryPrice * joineryCount * 0.91;
                } else {
                    finalPrice = joineryPrice * joineryCount;
                }
            }
            break;
    }

    if (deliveryType === "With delivery") {
        finalPrice = finalPrice + deliveryPrice;
    } else if (deliveryType === "Without delivery") {
        finalPrice;
    } else {
        console.log("Invalid order");
    }

    if (joineryCount > 99) {
        finalPrice = finalPrice * 0.96;
    }

    if (joineryCount >= 10) {
        console.log(`${finalPrice.toFixed(2)} BGN`);
    } else {
        console.log("Invalid order");
    }
}

aluminumJoinery(["2", "130X180", "With delivery"]);