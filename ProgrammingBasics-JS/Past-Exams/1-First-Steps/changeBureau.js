function changeBureau(a,b,c){
    let bitcoins = Number(a);
    let chineseMoney = Number(b);
    let commissionsAmmount = Number(c);
    let bitcoinsInBGN = bitcoins * 1168;
    let chineseMoneyInUSD = chineseMoney * 0.15;
    let usdToBGN = chineseMoneyInUSD * 1.76;
    let moneyInBGN = bitcoinsInBGN + usdToBGN;
    let moneyInEuro = moneyInBGN / 1.95;
    let commissionsPercentage = commissionsAmmount / 100;
    let commissions = moneyInEuro * commissionsPercentage;
    console.log((moneyInEuro - commissions).toFixed(2));
}

changeBureau("1","5","5");