function lowestPricesInCities(inputArr) {
    let products = {};

    for (let line of inputArr) {
        let [townName, productName, productPrice] = line.split(' | ');
        productPrice = Number(productPrice);
        
        if (!products.hasOwnProperty(productName)) {
            products[productName] = {};
            products[productName].price = productPrice;
            products[productName].townName = townName;
        } else  {
            if (products[productName].price > productPrice) {
                products[productName].price = productPrice;
                products[productName].townName = townName;
            }
        }
    }

    let entries = Object.entries(products);

    for (let product of entries) {
        let [name, data] = product;

        let [price, town] = Object.values(data);
        console.log(`${name} -> ${price} (${town})`);
    }
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);