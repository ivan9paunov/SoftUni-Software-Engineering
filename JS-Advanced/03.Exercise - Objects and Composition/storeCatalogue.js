function storeCatalogue(inputArr) {
    const catalogue = {};

    for (let line of inputArr) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        const firstChar = product[0];

        if (catalogue.hasOwnProperty(firstChar)) {
            catalogue[firstChar][product] = price;
        } else {
            catalogue[firstChar] = {};
            catalogue[firstChar][product] = price;
        }
    }

    const sortedCatalogue = Object.entries(catalogue)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (const chapter of sortedCatalogue) {
        const [mainChar, products] = chapter;
        console.log(mainChar);

        const productValues = Object.entries(products)
            .sort((a, b) => a[0].localeCompare(b[0]));
        
        for (const product of productValues) {
            const [productName, productPrice] = product;
            console.log(`  ${productName}: ${productPrice}`);
        }
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);