function catalogue(catalogueArr) {
    let sortedCatalogue = catalogueArr.sort((a, b) => a.localeCompare(b));
    let productsCatalogue = [];

    for (let productLine of sortedCatalogue) {
        let nameAndPrice = productLine.split(' : ');
        let product = {
            name: nameAndPrice[0],
            price: parseFloat(nameAndPrice[1])
        };

        productsCatalogue.push(product);
    }

    let currentLetter = '';

    for (let product of productsCatalogue) {

        if(product.name[0] == currentLetter) {
            console.log(`  ${product.name}: ${product.price}`);

        } else {
            currentLetter = product.name[0];
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`);
        }

    }
}

catalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);