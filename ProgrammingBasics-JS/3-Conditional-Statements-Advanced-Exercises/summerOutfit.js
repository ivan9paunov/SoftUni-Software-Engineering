function summerOutfit(input) {
    let tempOutside = Number(input[0]);
    let periodOfTheDay = input[1];
    let outfit = "";
    let shoes = "";
    if(tempOutside < 10 && tempOutside >= 43) {
        console.log("Undefined");
    } else if(tempOutside >= 10 && tempOutside <= 18) {
        switch(periodOfTheDay){
            case "Morning"  : outfit = "Sweatshirt"; shoes = "Sneakers"; break;
            case "Afternoon":
            case "Evening"  : outfit = "Shirt"; shoes = "Moccasins"; break;
            default : console.log("Undefined");
        }
    } else if(tempOutside > 18 && tempOutside <= 24) {
        switch(periodOfTheDay){
            case "Morning"  : 
            case "Evening"  : outfit = "Shirt"; shoes = "Moccasins"; break;
            case "Afternoon": outfit = "T-Shirt"; shoes = "Sandals"; break;
            default : console.log("Undefined");
        }
    } else {
        switch(periodOfTheDay){
            case "Morning"  : outfit = "T-Shirt"; shoes = "Sandals"; break;
            case "Afternoon": outfit = "Swim Suit"; shoes = "Barefoot"; break;
            case "Evening"  : outfit = "Shirt"; shoes = "Moccasins"; break;
            default : console.log("Undefined");
        }
    }
    console.log(`It's ${tempOutside} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["24","Afternoon"]);