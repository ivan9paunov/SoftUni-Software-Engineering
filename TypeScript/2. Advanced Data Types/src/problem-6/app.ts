function lowestPricesInCities(inputArray: string[]): void {
    type Info = {
        price: number,
        town: string
    }
    
    type Products = {
        [product: string]: Info
    }

    const products: Products = {};

    for (let data of inputArray) {
        const [town, product, priceAsString] = data.split(' | ');
        const price: number = Number(priceAsString);

        if (!products.hasOwnProperty(product)) {
            products[product] = { price: price, town: town }
        } else {
            if (products[product].price > price) {
                products[product] = { price: price, town: town }
            }
        }
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
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