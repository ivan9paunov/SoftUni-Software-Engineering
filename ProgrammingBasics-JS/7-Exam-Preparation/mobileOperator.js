function mobileOperator(input) {
    let contractYears = input[0];
    let contractType = input[1];
    let cellular = input[2];
    let payMonths = Number(input[3]);
    let price = 0;
    switch (contractType) {
        case "Small":
            switch (contractYears) {
                case "one": price = 9.98; break;
                case "two": price = 8.58; break;
            }
        break;
        case "Middle":
            switch (contractYears) {
                case "one": price = 18.99; break;
                case "two": price = 17.09; break;
            }
        break;
        case "Large":
            switch (contractYears) {
                case "one": price = 25.98; break;
                case "two": price = 23.59; break;
            }
        break;
        case "ExtraLarge":
            switch (contractYears) {
                case "one": price = 35.99; break;
                case "two": price = 31.79; break;
            }
        break;
    }

    if (cellular === "yes") {
        if (price <= 10) {
            price += 5.50;
        } else if (price <= 30) {
            price += 4.35;
        } else {
            price += 3.85;
        }
    }

    if (contractYears === "two") {
        price *= 0.9625;
    }

    let finalPrice = price * payMonths;
    console.log(`${(finalPrice).toFixed(2)} lv.`);
}

// mobileOperator(["one","Small","yes","10"]);
mobileOperator(["two","Large","no","10"]);