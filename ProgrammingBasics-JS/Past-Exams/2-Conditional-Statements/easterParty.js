function easterParty(input) {
    let guests = Number(input[0]);
    let kuvertPrice = Number(input[1]);
    let budget = Number(input[2]);
    let cakePrice = budget * 0.10;
    let spending = guests * kuvertPrice;
    if (guests >= 10 && guests <= 15) {
        spending = guests * kuvertPrice * 0.85;
    } else if (guests > 15 && guests <= 20) {
        spending = guests * kuvertPrice * 0.80;
    } else if (guests > 20) {
        spending = guests * kuvertPrice * 0.75;
    }
    let totalPrice = spending + cakePrice;
    if (budget >= totalPrice) {
        console.log(`It is party time! ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(totalPrice - budget).toFixed(2)} leva needed.`);
    }
}

easterParty(["18","30","450"]);
