function skiTrip(input){
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];
    let overnightStays = days - 1;
    let price = 0;
    if(overnightStays < 10){
        switch(roomType){
            case "room for one person": price = overnightStays * 18.00; break;
            case "apartment"          : price = overnightStays * 25.00 * 0.70; break;
            case "president apartment": price = overnightStays * 35.00 * 0.90; break;
        }
    } else if(overnightStays <= 15){
        switch(roomType){
            case "room for one person": price = overnightStays * 18.00; break;
            case "apartment"          : price = overnightStays * 25.00 * 0.65; break;
            case "president apartment": price = overnightStays * 35.00 * 0.85; break;
        }
    } else {
        switch(roomType){
            case "room for one person": price = overnightStays * 18.00; break;
            case "apartment"          : price = overnightStays * 25.00 * 0.50; break;
            case "president apartment": price = overnightStays * 35.00 * 0.80; break;
        }
    }

    if(feedback === "positive"){
        price = price * 1.25;
    } else if(feedback === "negative"){
        price = price * 0.90;
    }

    console.log(price.toFixed(2));
}

skiTrip(["12","room for one person","positive"]);