const personInfo = (name: string, surname: string, age: string): object => {
    type Person = {
        firstName: string,
        lastName: string,
        age: string
    }

    const person: Person = {
        firstName: name,
        lastName: surname,
        age: age
    }

    return person;
}

console.log(personInfo("Peter", "Pan", "20"));