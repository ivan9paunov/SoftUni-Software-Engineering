const calorieObject = (data: string[]): void => {
    type Products = {
        [name: string]: number;
    }

    let products: Products = {};

    for (let i = 0; i < data.length; i += 2) {
        const name: string = data[i];
        const kcal: number = Number(data[i + 1]);

        if (products.hasOwnProperty(name)) {
            products[name] += kcal;
        } else {
            products[name] = kcal;
        }
    }

    console.log(products);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log('---');
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);