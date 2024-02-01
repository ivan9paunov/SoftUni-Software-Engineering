function cars(inputArr) {
    let garrage = [];

    for (let command of inputArr) {
        if (command.includes('create') && !command.includes('inherit')) {
            const [action, name] = command.split(' ');
            garrage.push({name: name});

        } else if (command.includes('inherit')) {
            const [createAct, newCar, inheritAct, existingCar] = command.split(' ');
            createChildCar(newCar, existingCar);

        } else if (command.includes('set')) {
            const [action, carName, attrName, attrValue] = command.split(' ');
            
            for (let car of garrage) {
                if (car.name == carName) {
                    car[attrName] = attrValue;
                }
            }

        } else if (command.includes('print')) {
            const [action, carName] = command.split(' ');
            console.log(printCar(carName));
        }
    }

    function createChildCar(name, existingCar) {
        for (let car of garrage) {
            if (car.name == existingCar) {
                let childCar = Object.create(car);
                childCar.name = name;
                garrage.push(childCar);
            }
        }
    }

    function printCar(carToPrint) {
        let printLine = [];

        for (let car of garrage) {
            if (car.name == carToPrint) {
                for (let key in car) {
                    
                    if (key != 'name') {
                        let currentAttributes = '';
                        currentAttributes = `${key}:${car[key]}`;
                        printLine.push(currentAttributes);
                    }
                }
            }
        }

        return printLine.join(',');
    }
}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);