function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);
    let transportationFee = 0;
    let tickets = 0;
    if(people < 5){
        transportationFee = budget * 0.75;
    } else if(people < 10) {
        transportationFee = budget * 0.60;
    } else if(people < 25) {
        transportationFee = budget * 0.50;
    } else if(people < 50) {
        transportationFee = budget * 0.40;
    } else {
        transportationFee = budget * 0.25;
    }

    if(category === "VIP"){
        tickets = (people * 499.99) + transportationFee;
    } else if(category === "Normal"){
        tickets = (people * 249.99) + transportationFee;
    }

    if(budget >= tickets){
        console.log(`Yes! You have ${(budget - tickets).toFixed(2)} leva left.`);
    } else if(tickets > budget) {
        console.log(`Not enough money! You need ${(tickets - budget).toFixed(2)} leva.`);
    }
}

matchTickets(["30000","VIP","49"])