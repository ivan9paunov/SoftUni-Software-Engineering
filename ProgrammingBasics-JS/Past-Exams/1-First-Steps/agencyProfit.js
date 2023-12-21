function agencyProfit(input) {
    let airCompany = input[0];
    let adultTickets = Number(input[1]);
    let kidsTickets = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let serviceFee = Number(input[4]);
    let kidTicketPrice = adultTicketPrice * 0.30;
    let agencyPriceForAdult = adultTicketPrice + serviceFee;
    let agencyPriceForKid = kidTicketPrice + serviceFee;
    let totalPrice = (agencyPriceForAdult * adultTickets) + (agencyPriceForKid * kidsTickets);
    let profit = totalPrice * 0.20;
    console.log(`The profit of your agency from ${airCompany} tickets is ${profit.toFixed(2)} lv.`);
}

agencyProfit(["WizzAir","15","5","120","40"]);