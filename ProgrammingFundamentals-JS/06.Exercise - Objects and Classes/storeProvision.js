function storeProvision(storage, order) {
    let products = {};

    for (let item = 0; item < storage.length; item += 2) {
        let product = storage[item];
        let qty = Number(storage[item + 1]);

        products[product] = qty;
    }

    for (let item = 0; item < order.length; item += 2) {
        let product = order[item];
        let qty = Number(order[item + 1]);

        if (product in products) {
            products[product] += qty;
        } else {
            products[product] = qty;
        }
    }

    let entries = Object.entries(products);

    for (let entry of entries) {
        let [product, qty] = entry;
        console.log(`${product} -> ${qty}`);
    }
    
}

storeProvision(
    [
        'Chips', '5',
        'CocaCola', '9', 
        'Bananas', '14', 
        'Pasta', '4', 
        'Beer', '2'
    ],
        
    [
        'Flour', '44', 
        'Oil', '12', 
        'Pasta', '7',
        'Tomatoes', '70', 
        'Bananas', '30'
    ]
);