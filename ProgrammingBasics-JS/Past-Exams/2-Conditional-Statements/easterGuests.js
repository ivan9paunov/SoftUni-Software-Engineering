function easterGuests(input) {
    let guests = Number(input[0]);
    let budget = Number(input[1]);

    let easterBreads = Math.ceil(guests / 3);
    let eggs = guests * 2;
    let easterBreadsPrice = easterBreads * 4;
    let eggsPrice = eggs * 0.45;
    let totalSum = easterBreadsPrice + eggsPrice;
    if (budget >= totalSum) {
        console.log(`Lyubo bought ${easterBreads} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${(budget - totalSum).toFixed(2)} lv. left.`);
    } else {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${(totalSum - budget).toFixed(2)} lv. more.`);
    }
}

easterGuests(["10", "35"]);