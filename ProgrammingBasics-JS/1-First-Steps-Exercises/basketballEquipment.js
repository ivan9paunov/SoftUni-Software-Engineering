function basketballEquipment(input) {
    let yearlyMembershipPrice = Number(input[0]);
    let shoesPrice = yearlyMembershipPrice - (yearlyMembershipPrice * 0.4);
    let kitPrice = shoesPrice - (shoesPrice * 0.2);
    let ballPrice = kitPrice * 0.25;
    let accessoriesPrice = ballPrice * 0.2;
    let trainingPrice = yearlyMembershipPrice + shoesPrice + kitPrice + ballPrice + accessoriesPrice;
    console.log(trainingPrice);
}

basketballEquipment(["550"]);