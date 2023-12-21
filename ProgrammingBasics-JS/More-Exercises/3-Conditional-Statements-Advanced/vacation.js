function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let location = "";
    let overnightPlace = "";
    if(budget <= 1000){
        overnightPlace = "Camp"; {
            switch (season) {
                case "Summer":
                    location = "Alaska";
                    price = budget * 0.65;
                break;
                case "Winter":
                    location = "Morocco";
                    price = budget * 0.45;
                break;
            }
        }
    } else if(budget <= 3000) {
        overnightPlace = "Hut"; {
            switch (season) {
                case "Summer":
                    location = "Alaska";
                    price = budget * 0.80;
                break;
                case "Winter":
                    location = "Morocco";
                    price = budget * 0.60;
                break;
            }
        }
    } else {
        overnightPlace = "Hotel"; {
            switch (season) {
                case "Summer":
                    location = "Alaska";
                    price = budget * 0.90;
                break;
                case "Winter":
                    location = "Morocco";
                    price = budget * 0.90;
                break;
            }
        }
    }
    console.log(`${location} - ${overnightPlace} - ${price.toFixed(2)}`);
}

vacation(["800","Summer"]);