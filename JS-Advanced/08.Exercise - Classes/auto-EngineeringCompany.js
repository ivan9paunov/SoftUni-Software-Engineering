function autoEngineeringCompany(carsArr) {
    let cars = {};

    for (let car of carsArr) {
        let [brand, model, producedCars] = car.split(' | ');
        producedCars = Number(producedCars);

        if (!cars.hasOwnProperty(brand)) {
            cars[brand] = {
                [model]: producedCars
            }
        } else {
            if (cars[brand][model]) {
                cars[brand][model] += producedCars;
            } else {
                cars[brand][model] = producedCars;
            }
        }
    }

    for (let brand in cars) {
        console.log(brand);
        let models = cars[brand];

        for (let model in models) {
            console.log(`###${model} -> ${models[model]}`);
        }
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);