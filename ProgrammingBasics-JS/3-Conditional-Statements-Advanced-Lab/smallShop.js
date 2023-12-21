function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = input[2];
    if (city === "Sofia") {
        switch (product) {
            case "coffee": console.log(quantity * 0.50); break;
            case "water": console.log(quantity * 0.80); break;
            case "beer": console.log(quantity * 1.20); break;
            case "sweets": console.log(quantity * 1.45); break;
            case "peanuts": console.log(quantity * 1.60); break;
        }
    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee": console.log(quantity * 0.40); break;
            case "water": console.log(quantity * 0.70); break;
            case "beer": console.log(quantity * 1.15); break;
            case "sweets": console.log(quantity * 1.30); break;
            case "peanuts": console.log(quantity * 1.50); break;
        }
    } else if (city === "Varna") {
        switch (product) {
            case "coffee": console.log(quantity * 0.45); break;
            case "water": console.log(quantity * 0.70); break;
            case "beer": console.log(quantity * 1.10); break;
            case "sweets": console.log(quantity * 1.35); break;
            case "peanuts": console.log(quantity * 1.55); break;
        }
    }
}

smallShop(["sweets", "Sofia", "2.23"]);