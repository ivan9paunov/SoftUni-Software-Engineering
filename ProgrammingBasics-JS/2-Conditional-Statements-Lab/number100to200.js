function number100to200(input) {
    let number = Number(input[0]);
    if (number <= 99)
        console.log("Less than 100");
    else if (number >= 201)
        console.log("Greater than 200");
    else 
        console.log("Between 100 and 200");
}

number100to200(["202"]);