function garage(carsInput) {
    let cars = {};

    for (let car of carsInput) {
        let tokens = car.split(' - ');
        let [garageNumber, carInfo] = tokens;
        let separated = carInfo.split(', ');
        
        let data = [];
        for (let info of separated) {
            let kvp = info.split(': ').join(' - ');
            data.push(kvp);
        }
        
        if (garageNumber in cars) {
            cars[garageNumber].push(data);
        } else {
            cars[garageNumber] = [];
            cars[garageNumber].push(data);
        }
    }

    let carsKVPs = Object.entries(cars);

    for (let cars of carsKVPs) {
        let [garageNumber, carsData] = cars;
        console.log(`Garage № ${garageNumber}`);

        for (let car of carsData) {
            console.log(`--- ${car.join(', ')}`);
        }
    }
}

garage([
    '1 - color: blue, fuel type: diesel', 
    '1 - color: red, manufacture: Audi', 
    '2 - fuel type: petrol', 
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);