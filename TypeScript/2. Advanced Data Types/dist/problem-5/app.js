"use strict";
const townsPopulation = (townsArray) => {
    let towns = {};
    for (let town of townsArray) {
        const [name, popul] = town.split(' <-> ');
        const population = Number(popul);
        if (towns.hasOwnProperty(name)) {
            towns[name] += population;
        }
        else {
            towns[name] = population;
        }
    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
};
townsPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
console.log('---');
townsPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);
