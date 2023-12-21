function backToThePast(input){
    let inheritanceMoney = Number(input[0]);
    let yearOfDeath = Number(input[1]);
    let currentAge = 17;

    for(let i = 1800; i <= yearOfDeath; i++){
        if(i % 2 === 0){
            currentAge++;
            inheritanceMoney -= 12000;
        } else {
            currentAge++;
            inheritanceMoney -= (12000 + (currentAge * 50));
        }
    }
    if(inheritanceMoney >= 0){
        console.log(`Yes! He will live a carefree life and will have ${inheritanceMoney.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(inheritanceMoney).toFixed(2)} dollars to survive.`);
    }
}

backToThePast(["100000.15","1808"]);