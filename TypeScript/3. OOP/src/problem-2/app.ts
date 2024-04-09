class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name,
        this.age = age
    }

    getInfo(): void {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

function opinionPoll(person: string): void {
    const [name, ageAsString] = person.split(' ');
    const age: number = Number(ageAsString);
    const myPerson = new Person(name, age);
    myPerson.getInfo();
}

opinionPoll('Peter 12');
console.log('---');
opinionPoll('Sofia 33');