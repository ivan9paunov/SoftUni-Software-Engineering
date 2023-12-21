function thirdExam(input) {
    let packageWeight = Number(input[0]);
    let serviceType = input[1];
    let distance = Number(input[2]);

    let price = 0;
    let lessThanOne = 0.03;
    let lessThanTen = 0.05;
    let lessThan40 = 0.10;
    let lessThan90 = 0.15;
    let lessThan150 = 0.20;

    let overpriceForKG = 0;
    let overpriceForKM = 0;
    let totalOverprice = 0;

    switch (serviceType) {
        case "standard":
            if (packageWeight < 1) {
                price += distance * lessThanOne;
            } else if (packageWeight >= 1 && packageWeight < 10) {
                price += distance * lessThanTen;
            } else if (packageWeight >= 10 && packageWeight < 40) {
                price += distance * lessThan40;
            } else if (packageWeight >= 40 && packageWeight < 90) {
                price += distance * lessThan90;
            } else if (packageWeight >= 90 && packageWeight <= 150) {
                price += distance * lessThan150;
            }
        break;
        case "express":
            if (packageWeight < 1) {
                price += distance * lessThanOne;
                overpriceForKG += lessThanOne * 0.80;
                overpriceForKM += packageWeight * overpriceForKG;
                totalOverprice += distance * overpriceForKM;
                price += totalOverprice;
            } else if (packageWeight >= 1 && packageWeight < 10) {
                price += distance * lessThanTen;
                overpriceForKG += lessThanTen * 0.40;
                overpriceForKM += packageWeight * overpriceForKG;
                totalOverprice += distance * overpriceForKM;
                price += totalOverprice;
            } else if (packageWeight >= 10 && packageWeight < 40) {
                price += distance * lessThan40;
                overpriceForKG += lessThan40 * 0.05;
                overpriceForKM += packageWeight * overpriceForKG;
                totalOverprice += distance * overpriceForKM;
                price += totalOverprice;
            } else if (packageWeight >= 40 && packageWeight < 90) {
                price += distance * lessThan90;
                overpriceForKG += lessThan90 * 0.02;
                overpriceForKM += packageWeight * overpriceForKG;
                totalOverprice += distance * overpriceForKM;
                price += totalOverprice;
            } else if (packageWeight >= 90 && packageWeight <= 150) {
                price += distance * lessThan150;
                overpriceForKG += lessThan150 * 0.01;
                overpriceForKM += packageWeight * overpriceForKG;
                totalOverprice += distance * overpriceForKM;
                price += totalOverprice;
            }
        break;
    }

    console.log(`The delivery of your shipment with weight of ${packageWeight.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}

thirdExam(["149.5",
"express",
"1000"])
;