function birthdayParty(input){
    let roomRent = Number(input[0]);
    let cakePrice = roomRent * 0.20;
    let drinksPrice = cakePrice - (cakePrice * 0.45);
    let animatorPrice = roomRent / 3;
    console.log(roomRent + cakePrice + drinksPrice + animatorPrice);
}

birthdayParty(["2250"]);