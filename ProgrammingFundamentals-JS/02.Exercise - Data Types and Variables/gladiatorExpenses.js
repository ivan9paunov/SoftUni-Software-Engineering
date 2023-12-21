function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenShields = 0;
    let helmetExpenses = 0;
    let swordExpenses = 0;
    let shieldExpenses = 0;
    let armorExpenses = 0;

    for (let fights = 1; fights <= lostFights; fights++) {
        if (fights % 2 == 0 && fights % 3 == 0) {
            brokenShields++;
            helmetExpenses += helmetPrice;
            swordExpenses += swordPrice;
            shieldExpenses += shieldPrice;
        } else if (fights % 2 == 0) {
            helmetExpenses += helmetPrice;
        } else if (fights % 3 == 0) {
            swordExpenses += swordPrice;
        }

        if (brokenShields == 2) {
            brokenShields = 0;
            armorExpenses += armorPrice;
        }
    }
    
    console.log(`Gladiator expenses: ${(helmetExpenses + swordExpenses + shieldExpenses + armorExpenses).toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
// gladiatorExpenses(23, 12.50, 21.50, 40, 200);