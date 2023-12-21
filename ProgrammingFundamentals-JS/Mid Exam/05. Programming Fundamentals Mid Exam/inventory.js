function inventory(arr) {
    let items = arr.shift().split(', ');
    let command = arr.shift();

    while (command != 'Craft!') {
        let tokens = command.split(' - ');
        let action = tokens[0];
        
        if (action == 'Collect') {
            let item = tokens[1];

            if (!items.includes(item)) {
                items.push(item);
            }
        } else if (action == 'Drop') {
            let item = tokens[1];

            if(items.includes(item)) {
                let idx = items.indexOf(item);
                items.splice(idx, 1);
            }
        } else if (action == 'Combine Items') {
            let oldAndNewItems = tokens[1].split(':');
            let oldItem = oldAndNewItems[0];
            let newItem = oldAndNewItems[1];

            if (items.includes(oldItem)) {
                let idx = items.indexOf(oldItem);
                items.splice(idx + 1, 0, newItem);
            }
        } else if (action == 'Renew') {
            let item = tokens[1];

            if (items.includes(item)) {
                let idx = items.indexOf(item);
                items.splice(idx, 1);
                items.push(item);
            }
        }

        command = arr.shift();
    }

    console.log(items.join(', '));
}

// inventory([
//     'Iron, Wood, Sword', 
//     'Collect - Gold', 
//     'Drop - Wood', 
//     'Craft!'
// ]);

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);