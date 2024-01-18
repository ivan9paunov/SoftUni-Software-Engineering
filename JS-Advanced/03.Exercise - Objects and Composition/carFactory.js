function carFactory(data) {
    const engine = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    };

    let car = {
        model: data.model,
        engine: {},
        carriage: {},
        wheels: null
    };

    if (data.power <= engine.smallEngine.power) {
        car.engine = engine.smallEngine;
    } else if (data.power <= engine.normalEngine.power) {
        car.engine = engine.normalEngine;
    } else if (data.power <= engine.monsterEngine.power) {
        car.engine = engine.monsterEngine;
    }

    if (data.carriage == 'hatchback') {
        car.carriage.type = 'hatchback';
        car.carriage.color = data.color;
    } else if (data.carriage == 'coupe') {
        car.carriage.type = 'coupe';
        car.carriage.color = data.color;
    }

    data.wheelsize = data.wheelsize % 2 == 0 ? data.wheelsize - 1 : data.wheelsize;
    car.wheels = new Array(4).fill(data.wheelsize);

    return car;
}

carFactory(
    { 
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14 
    }
);