function houseParty(arr) {
    let guests = [];

    for (let el of arr) {
        let currentGuest = el.split(' ');
        let name = currentGuest[0];
        
        if (currentGuest.length == 3) {
            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                newGuestList = guests.filter(guest => guest != name);
                guests = newGuestList;
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guests.join('\n'));
}

// houseParty([
//     'Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!'
// ]);

houseParty([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);