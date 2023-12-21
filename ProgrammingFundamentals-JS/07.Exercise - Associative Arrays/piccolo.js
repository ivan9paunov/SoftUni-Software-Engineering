function piccolo(inputArr) {
    let parkingLot = {};

    for (let car of inputArr) {
        let [inOut, plateNumber] = car.split(', ');
        if (inOut == 'IN') {
            parkingLot[plateNumber] = null;
        } else if (inOut == 'OUT') {
            delete parkingLot[plateNumber];
        }
    }

    let keys = Object.keys(parkingLot).sort((a, b) => a.localeCompare(b));

    if (keys.length > 0) {
        console.log(keys.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ]
);

// piccolo(
//     [
//         'IN, CA2844AA',
//         'IN, CA1234TA',
//         'OUT, CA2844AA',
//         'OUT, CA1234TA'
//     ]
// );