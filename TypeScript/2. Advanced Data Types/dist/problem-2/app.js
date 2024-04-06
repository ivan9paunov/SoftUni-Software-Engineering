"use strict";
const personInfo = (name, surname, age) => {
    const person = {
        firstName: name,
        lastName: surname,
        age: age
    };
    return person;
};
console.log(personInfo("Peter", "Pan", "20"));
