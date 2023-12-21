function theatrePromotions(typeOfDay, age) {
    switch (typeOfDay) {
        case 'Weekday':
            if (age < 0 || age > 122) {
                console.log("Error!");
            } else if (age >= 0 && age <= 18) {
                console.log("12$");
            } else if (age <= 64) {
                console.log("18$");
            } else if (age <= 122) {
                console.log("12$");
            }
        break;
        case 'Weekend':
            if (age < 0 || age > 122) {
                console.log("Error!");
            } else if (age >= 0 && age <= 18) {
                console.log("15$");
            } else if (age <= 64) {
                console.log("20$");
            } else if (age <= 122) {
                console.log("15$");
            }
        break;
        case 'Holiday':
            if (age < 0 || age > 122) {
                console.log("Error!");
            } else if (age >= 0 && age <= 18) {
                console.log("5$");
            } else if (age <= 64) {
                console.log("12$");
            } else if (age <= 122) {
                console.log("10$");
            }
        break;
    }
}

theatrePromotions('Weekday', 42);