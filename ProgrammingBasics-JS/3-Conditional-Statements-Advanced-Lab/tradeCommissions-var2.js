function tradeCommissions(input) {
    let city = input[0];
    let sales = input[1];
    let commissions = 0;
    if (sales < 0 || !(city === "Sofia" || city === "Varna" || city === "Plovdiv")) {
        console.log("error");
    } else if(sales >= 0 && sales <= 500) {
        switch(city) {
            case "Sofia"  : commissions = sales * 0.05; break;
            case "Varna"  : commissions = sales * 0.045; break;
            case "Plovdiv": commissions = sales * 0.055; break;
        }
        console.log(commissions.toFixed(2));
    } else if(sales > 500 && sales <= 1000) {
        switch(city) {
            case "Sofia"  : commissions = sales * 0.07; break;
            case "Varna"  : commissions = sales * 0.075; break;
            case "Plovdiv": commissions = sales * 0.08; break;
        }
        console.log(commissions.toFixed(2));
    } else if(sales > 1000 && sales <= 10000) {
        switch(city) {
            case "Sofia"  : commissions = sales * 0.08; break;
            case "Varna"  : commissions = sales * 0.10; break;
            case "Plovdiv": commissions = sales * 0.12; break;
        }
        console.log(commissions.toFixed(2));
    } else {
        switch(city) {
            case "Sofia"  : commissions = sales * 0.12; break;
            case "Varna"  : commissions = sales * 0.13; break;
            case "Plovdiv": commissions = sales * 0.145; break;
        }
        console.log(commissions.toFixed(2));
    }
}

tradeCommissions(["Sofia","1500"]);