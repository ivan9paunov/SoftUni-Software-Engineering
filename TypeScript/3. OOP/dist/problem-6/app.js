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
    while (command != 'End' || command == undefined) {
        while (command != 'Tournament') {
            if (command != undefined) {
                const [trainer, pokemonName, element, healthAsStr] = command.split(' ');
                const health = Number(healthAsStr);
                const myPokemon = new Pokemon(pokemonName, element, health);
                if (trainers.hasOwnProperty(trainer)) {
                    trainers[trainer].push(myPokemon);
                }
                else {
                    trainers[trainer] = [myPokemon];
                }
                console.log(trainers);
            }
            command = arr.shift();
        }
        command = arr.shift();
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
