function vacation(people, groupType, day) {
    let singularPrice = 0;

    switch (groupType) {
        case "Students":
            switch (day) {
                case "Friday": singularPrice = 8.45; break;
                case "Saturday": singularPrice = 9.80; break;
                case "Sunday": singularPrice = 10.46; break;
            }
        break;
        case "Business":
            switch (day) {
                case "Friday": singularPrice = 10.90; break;
                case "Saturday": singularPrice = 15.60; break;
                case "Sunday": singularPrice = 16; break;
            }
        break;
        case "Regular":
            switch (day) {
                case "Friday": singularPrice = 15; break;
                case "Saturday": singularPrice = 20; break;
                case "Sunday": singularPrice = 22.50; break;
            }
        break;
    }


    let totalPrice = 0;
    if (groupType == "Students" && people >= 30) {
        singularPrice *= 0.85;
    } else if (groupType == "Business" && people >= 100) {
        people -= 10;
    } else if (groupType == "Regular" && people >= 10 && people <= 20) {
        singularPrice *= 0.95;
    }

    totalPrice = people * singularPrice;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");