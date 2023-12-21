function personalTitles(input) {
    let years = Number(input[0]);
    let gender = input[1];
    if (years < 16) {
        if (gender === "m") {
            console.log("Master");
        } else {
            console.log("Miss");
        }
    } else {
        if (gender === "m") {
            console.log("Mr.");
        } else {
            console.log("Ms.");
        }
    }
}

personalTitles(["13.5","m"]);