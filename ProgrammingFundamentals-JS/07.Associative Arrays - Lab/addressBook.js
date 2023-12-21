function addressBook(addressesInput) {
    let addresses = {};

    for (let info of addressesInput) {
        let [name, address] = info.split(':');
        addresses[name] = address; 
    }

    let entries = Object.entries(addresses);
    let sortedAddresses = entries.sort((a, b) => a[0].localeCompare(b[0]));
    sortedAddresses.forEach(person => console.log(`${person[0]} -> ${person[1]}`));
}

addressBook(
    [
        'Bob:Huxley Rd',
        'John:Milwaukee Crossing',
        'Peter:Fordem Ave',
        'Bob:Redwing Ave',
        'George:Mesta Crossing',
        'Ted:Gateway Way',
        'Bill:Gateway Way',
        'John:Grover Rd',
        'Peter:Huxley Rd',
        'Jeff:Gateway Way',
        'Jeff:Huxley Rd'
    ]
);