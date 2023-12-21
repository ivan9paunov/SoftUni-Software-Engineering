function convertToJSON(name, lastName, hairColor) {
    let myObj = {
        name,
        lastName,
        hairColor
    };

    let asJSON = JSON.stringify(myObj);
    console.log(asJSON);
}

convertToJSON('George', 'Jones', 'Brown');