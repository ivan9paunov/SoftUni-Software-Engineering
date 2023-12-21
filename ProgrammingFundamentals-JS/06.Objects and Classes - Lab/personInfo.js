function personInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    };

    return person;
}

let result = personInfo('Peter', 'Parker', 33);
console.log(result);