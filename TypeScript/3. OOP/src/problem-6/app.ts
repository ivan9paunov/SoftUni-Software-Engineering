class Trainer {
    name: string;
    badges: number = 0;
    collection: Pokemon[];

    constructor(name: string, collection: Pokemon[]) {
        this.name = name;
        this.collection = collection;
    }
}

class Pokemon {
    name: string;
    element: string;
    health: number;

    constructor(name: string, element: string, health: number) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}

type Trainers = {
    [name: string]: Pokemon[];
}

function pokemonTrainer(arr: string[]): void {
    const trainers: Trainers = {};

    let command: string | undefined = arr.shift();


    while (command != 'Tournament') {
        if (command != undefined) {
            const [trainer, pokemonName, element, healthAsStr] = command.split(' ');
            const health: number = Number(healthAsStr);

            const myPokemon = new Pokemon(pokemonName, element, health);

            if (trainers.hasOwnProperty(trainer)) {
                trainers[trainer].push(myPokemon);
            } else {
                trainers[trainer] = [myPokemon];
            }
            console.log(trainers);
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
