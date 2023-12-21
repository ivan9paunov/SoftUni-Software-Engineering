function bikeRace(input){
    let juniorBikers = Number(input[0]);
    let seniorBikers = Number(input[1]);
    let trackType = input[2];
    let totalParticipations = juniorBikers + seniorBikers;
    let taxForJuniors = 0;
    let taxForSeniors = 0;
    switch(trackType){
        case "trail"        : 
            taxForJuniors = juniorBikers * 5.50; 
            taxForSeniors = seniorBikers * 7.00; 
        break;
        case "cross-country":
            taxForJuniors = juniorBikers * 8.00;
            taxForSeniors = seniorBikers * 9.50; 
        break;
        case "downhill"     :
            taxForJuniors = juniorBikers * 12.25; 
            taxForSeniors = seniorBikers * 13.75; 
        break
        case "road"         :
            taxForJuniors = juniorBikers * 20.00;
            taxForSeniors = seniorBikers * 21.50;
        break;
    }
    let totalTax = taxForJuniors + taxForSeniors;
    if(trackType === "cross-country" && totalParticipations >= 50){
        totalTax = totalTax * 0.75;
    }
    
    let expensesTax = totalTax * 0.05;
    let charityMoney = totalTax - expensesTax;
    console.log(charityMoney.toFixed(2));
}

bikeRace(["21","26","cross-country"]);