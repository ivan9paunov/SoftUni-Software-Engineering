function train(arr) {
    let wagons = arr
        .shift()
        .split(' ')
        .map(Number);
    let capacity = Number(arr.shift());
    
    for (let el of arr) {
        let tokens = el.split(' ');
        
        if (tokens.length > 1) {
            let newWagonPassengers = Number(tokens[1]);
            wagons.push(newWagonPassengers);
        } else {
            let newPassengers = Number(tokens[0]);

            for (let i = 0; i < wagons.length; i++) {
                if (newPassengers + wagons[i] <= capacity) {
                    wagons[i] += newPassengers;
                    break;
                }
            }
        }
    }
    
    console.log(wagons.join(' '));
}

train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);