"use strict";
class Trainer {
    constructor(name, collection) {
        this.badges = 0;
        this.name = name;
        this.collection = collection;
    }
}
class Pokemon {
    constructor(name, element, health) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}
function pokemonTrainer(arr) {
    const trainers = {};
    let command = arr.shift();
    while (command != 'Tournament') {
        if (command != undefined) {
            const [trainer, pokemonName, element, healthAsStr] = command.split(' ');
            const health = Number(healthAsStr);
            const myPokemon = new Pokemon(pokemonName, element, health);
            if (trainers.hasOwnProperty(trainer)) {
                trainers[trainer].collection.push({ name: myPokemon.name, element: myPokemon.element, health: myPokemon.health });
            }
            else {
                trainers[trainer] = {
                    badges: 0,
                    collection: [{ name: myPokemon.name, element: myPokemon.element, health: myPokemon.health }]
                };
            }
        }
        command = arr.shift();
    }
    command = arr.shift();
    while (command != 'End') {
        for (const trainer in trainers) {
            let notApply = true;
            for (const pokemon of trainers[trainer].collection) {
                if (pokemon.element == command) {
                    trainers[trainer].badges++;
                    notApply = false;
                    break;
                }
            }
            if (notApply) {
                const collection = trainers[trainer].collection;
                for (let i = 0; i < collection.length; i++) {
                    let pokemon = collection[i];
                    pokemon.health -= 10;
                    if (pokemon.health <= 0) {
                        collection.splice(i, 1);
                    }
                }
            }
        }
        command = arr.shift();
    }
    const sortedTrainers = Object.entries(trainers)
        .sort((a, b) => b[1].badges - a[1].badges);
    for (let trainer of sortedTrainers) {
        console.log(`${trainer[0]} ${trainer[1].badges} ${trainer[1].collection.length}`);
    }
}
pokemonTrainer([
    'Peter Charizard Fire 100',
    'George Squirtle Water 38',
    'Peter Pikachu Electricity 10',
    'Tournament',
    'Fire',
    'Electricity',
    'End'
]);
console.log('---');
pokemonTrainer([
    'Sam Blastoise Water 18',
    'Narry Pikachu Electricity 22',
    'John Kadabra Psychic 90',
    'Tournament',
    'Fire',
    'Electricity',
    'Fire',
    'End'
]);
