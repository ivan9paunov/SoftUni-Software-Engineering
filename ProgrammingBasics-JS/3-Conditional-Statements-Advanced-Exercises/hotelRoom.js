function hotelRoom(input) {
    let month = input[0];
    let overnightStays = Number(input[1]);
    let priceForStudio = 0;
    let priceForApartment = 0;
    if(month === "May" || month === "October") {
        if(overnightStays > 14){
            priceForStudio = 50 * 0.70;
            priceForApartment = 65 * 0.90;
        } else if(overnightStays > 7){
            priceForStudio = 50 * 0.95;
            priceForApartment = 65;
        } else {
            priceForStudio = 50;
            priceForApartment = 65;
        }
    } else if(month === "June" || month === "September") {
        if(overnightStays > 14){
            priceForStudio = 75.20 * 0.80;
            priceForApartment = 68.70 * 0.90;
        } else {
            priceForStudio = 75.20;
            priceForApartment = 68.70;
        }
    } else if(month === "July" || month === "August") {
        if(overnightStays > 14){
            priceForStudio = 76;
            priceForApartment = 77 * 0.90;
        } else {
            priceForStudio = 76;
            priceForApartment = 77;
        }
    }
    console.log(`Apartment: ${(priceForApartment * overnightStays).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceForStudio * overnightStays).toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);