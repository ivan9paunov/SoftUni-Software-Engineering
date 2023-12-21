function partyTime(inputArr) {
    let partyCommand = inputArr.indexOf('PARTY');
    let invited = inputArr.slice(0, partyCommand);
    let coming = inputArr.slice(partyCommand + 1);

    let vipGuests = [];
    let regularGuests = [];
    
    for (let guestID of invited) {
        let firstChar = guestID[0].charCodeAt();
        
        if (firstChar >= 48 && firstChar <= 57) {
            vipGuests.push(guestID);
        } else {
            regularGuests.push(guestID);
        }
    }

    for (let guestID of coming) {

        if (vipGuests.includes(guestID)) {
            let idx = vipGuests.indexOf(guestID);
            vipGuests.splice(idx, 1);
        } else if (regularGuests.includes(guestID)) {
            let idx = regularGuests.indexOf(guestID);
            regularGuests.splice(idx, 1);
        } else {
            continue;
        }
    }

    let countOfGuests = vipGuests.length + regularGuests.length;
    console.log(countOfGuests);

    vipGuests.forEach(guest => console.log(guest));
    regularGuests.forEach(guest => console.log(guest));
}
    

partyTime(
    [
        '7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE', 
        'SVQXQCbc', 
        'tSzE5t0p', 
        'PARTY', 
        '9NoBUajQ', 
        'Ce8vwPmE', 
        'SVQXQCbc'
    ]
);

// partyTime(
//     [
//         'm8rfQBvl', 
//         'fc1oZCE0',
//         'UgffRkOn', 
//         '7ugX7bm0', 
//         '9CQBGUeJ', 
//         '2FQZT3uC', 
//         'dziNz78I', 
//         'mdSGyQCJ', 
//         'LjcVpmDL', 
//         'fPXNHpm1', 
//         'HTTbwRmM', 
//         'B5yTkMQi', 
//         '8N0FThqG', 
//         'xys2FYzn', 
//         'MDzcM9ZK', 
//         'PARTY', 
//         '2FQZT3uC', 
//         'dziNz78I', 
//         'mdSGyQCJ', 
//         'LjcVpmDL', 
//         'fPXNHpm1', 
//         'HTTbwRmM', 
//         'B5yTkMQi', 
//         '8N0FThqG', 
//         'm8rfQBvl', 
//         'fc1oZCE0', 
//         'UgffRkOn', 
//         '7ugX7bm0', 
//         '9CQBGUeJ'
//     ]
// );