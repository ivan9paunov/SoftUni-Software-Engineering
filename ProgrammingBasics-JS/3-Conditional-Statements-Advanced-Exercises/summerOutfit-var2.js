function summerOutfit(input) {
    let tempOutside = Number(input[0]);
    let periodOfTheDay = input[1];
    let outfit = "";
    let shoes = "";
    if(tempOutside < 10 && tempOutside >= 43) {
        console.log("Undefined");
    } else if(tempOutside >= 10 && tempOutside <= 18) {
        if(periodOfTheDay === "Morning") {
            outfit = "Sweatshirt"; 
            shoes = "Sneakers";
        } else if(periodOfTheDay === "Afternoon" || periodOfTheDay === "Evening") {
            outfit = "Shirt"; 
            shoes = "Moccasins";
        }
    } else if(tempOutside > 18 && tempOutside <= 24) {
        if(periodOfTheDay === "Morning" || periodOfTheDay === "Evening") {
            outfit = "Shirt"; 
            shoes = "Moccasins";
        } else if(periodOfTheDay === "Afternoon") {
            outfit = "T-Shirt"; 
            shoes = "Sandals";
        }
    } else {
        if(periodOfTheDay === "Morning") {
            outfit = "T-Shirt"; 
            shoes = "Sandals";
        } else if(periodOfTheDay === "Afternoon") {
            outfit = "Swim Suit"; 
            shoes = "Barefoot"; 
        } else if(periodOfTheDay === "Evening") {
            outfit = "Shirt"; 
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${tempOutside} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["24","Afternoon"]);