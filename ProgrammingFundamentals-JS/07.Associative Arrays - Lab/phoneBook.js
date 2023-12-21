function phoneBook(inputArr) {
    let phoneBookObj = {};

    for (let contact of inputArr) {
        let [names, phoneNumber] = contact.split(' ');
        phoneBookObj[names] = phoneNumber;
    }
    
    for (let [names, phoneNumber] of Object.entries(phoneBookObj)) {
        console.log(`${names} -> ${phoneNumber}`);
    }
}

phoneBook(
    [
        'Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344'
    ]
);