"use strict";
class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    getInfo() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
function opinionPoll(person) {
    const [name, ageAsString] = person.split(' ');
    const age = Number(ageAsString);
    const myPerson = new Person(name, age);
    myPerson.getInfo();
}
opinionPoll('Peter 12');
console.log('---');
opinionPoll('Sofia 33');
