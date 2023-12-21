function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    
    for (let command of arr) {
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action == 'Buy') {
            let item = tokens[1];

            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (action == 'Trash') {
            let item = tokens[1];

            if (inventory.includes(item)) {
                let idx = inventory.indexOf(item);
                inventory.splice(idx, 1);
            }
        } else if (action == 'Repair') {
            let item = tokens[1];

            if (inventory.includes(item)) {
                let idx = inventory.indexOf(item);
                inventory.splice(idx, 1);
                inventory.push(item);
            }
        } else if (action == 'Upgrade') {
            let token = tokens[1].split('-');
            let item = token[0];
            let upgrade = token[1];

            if (inventory.includes(item)) {
                let idx = inventory.indexOf(item);
                let itemToAdd = `${item}:${upgrade}`;
                inventory.splice(idx + 1, 0, itemToAdd);
            }
        }
    }

    console.log(inventory.join(' '));
}

gladiatorInventory(
    ['SWORD Shield Spear',
     'Buy Bag',
     'Trash Shield',
     'Repair Spear',
     'Upgrade SWORD-Steel']
);