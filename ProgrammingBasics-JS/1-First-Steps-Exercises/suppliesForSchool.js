function suppliesForSchool(input) {
    let numberOfPens = Number(input[0]);
    let numberOfMarkers = Number(input[1]);
    let litersDetergent = Number(input[2]);
    let discount = Number(input[3]);
    let pensPrice = numberOfPens * 5.80;
    let markersPrice = numberOfMarkers * 7.20;
    let detergentPrice = litersDetergent * 1.20;
    totalPrice = pensPrice + markersPrice + detergentPrice;
    priceToPay = totalPrice - (totalPrice * (discount / 100));
    console.log(priceToPay);
}

suppliesForSchool(["4", "2", "5", "13"]);