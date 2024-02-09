function juiceFlavors(fruitsArr) {
    let fruitsStorage = {};
    let juicesMade = {};

    for (let fruitData of fruitsArr) {
        let [fruit, qty] = fruitData.split(' => ');
        qty = Number(qty);

        if (!fruitsStorage.hasOwnProperty(fruit)) {
            fruitsStorage[fruit] = qty;
        } else {
            fruitsStorage[fruit] += qty;
        }

        if (fruitsStorage[fruit] >= 1000) {
            let totalQty = fruitsStorage[fruit];
            
            if (!juicesMade.hasOwnProperty(fruit)) {
                juicesMade[fruit] = 0;
            }
            
            let juices = Math.floor(totalQty / 1000);
            let qtyLeft = totalQty - (juices * 1000);

            juicesMade[fruit] += juices;
            fruitsStorage[fruit] = qtyLeft;
        }
    }

    for (let juice in juicesMade) {
        console.log(`${juice} => ${juicesMade[juice]}`);
    }
}

juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

// juiceFlavors([
//     'Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789'
// ]);