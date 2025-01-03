interface Pokemons {
    name: string;
    element: string;
    health: number;
}

type TrainerCollection = {
    badges: number;
    collection: Pokemons[];
}

type Trainers = {
    [name: string]: TrainerCollection;
}

class Trainer {
    name: string;
    badges: number = 0;
    collection: Pokemon[];

    constructor(name: string, collection: Pokemon[]) {
        this.name = name;
        this.collection = collection;
    }
}

class Pokemon implements Pokemons {
    name: string;
    element: string;
    health: number;

    constructor(name: string, element: string, health: number) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}

function pokemonTrainer(arr: string[]): void {
    const trainers: Trainers = {};

    let command: string | undefined = arr.shift();

    while (command != 'Tournament') {
        if (command != undefined) {
            const [trainer, pokemonName, element, health] = command.split(' ');

            const myPokemon = new Pokemon(pokemonName, element, Number(health));

            if (trainers.hasOwnProperty(trainer)) {
                trainers[trainer].collection.push(myPokemon);
            } else {
                trainers[trainer] = {
                    badges: 0,
                    collection: [myPokemon]
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
                    const pokemon = collection[i];
                    pokemon.health -= 10;

                    if (pokemon.health <= 0) {
                        collection.splice(i, 1);
                    }
                }
            }
        }

        command = arr.shift();
    }

    const sortedTrainers = 
        Object.entries(trainers)
        .sort((a, b) => b[1].badges - a[1].badges);

    for (const trainer of sortedTrainers) {
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
