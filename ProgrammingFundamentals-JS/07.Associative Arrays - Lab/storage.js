function storage(inputArr) {
    let storageMap = new Map();

    for (let productLine of inputArr) {
        let tokens = productLine.split(' ');
        let product = tokens[0];
        let qty = Number(tokens[1]);

        if (storageMap.has(product)) {
            let curQuantity = storageMap.get(product);
            let newQuantity = curQuantity += qty;
            storageMap.set(product, newQuantity);
        } else {
            storageMap.set(product, qty);
        }
    }

    for (let [product, qty] of storageMap) {
        console.log(`${product} -> ${qty}`);
    }
}

storage(
    [
        'tomatoes 10',
        'coffee 5',
        'olives 100',
        'coffee 40'
    ]
);