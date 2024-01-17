function townPopulation(inputArr) {
    let towns = {};

    for (let line of inputArr) {
        let [town, population] = line.split(' <-> ');
        population = Number(population);

        if (town in towns) {
            towns[town] += population;
        } else {
            towns[town] = population;
        }
    }

    let entries = Object.entries(towns);

    for (let entry of entries) {
        let [name, population] = entry;
        console.log(`${name} : ${population}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);