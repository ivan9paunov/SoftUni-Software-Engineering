function solution() {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function(command) {
        if (command.includes('restock')) {
            let [action, microelement, quantity] = command.split(' ');
            quantity = Number(quantity);
            storage[microelement] += quantity;
            return "Success";

        } else if (command.includes('prepare')) {
            let [action, product, quantity] = command.split(' ');
            quantity = Number(quantity);

            for (let ingredient in recipes[product]) {
                let neededIngredient = recipes[product][ingredient] * quantity;

                if (storage[ingredient] < (neededIngredient)) {
                    return `Error: not enough ${ingredient} in stock`;
                } else {
                    storage[ingredient] -= neededIngredient;
                }
            }

            return 'Success';

        } else if (command.includes('report')) {
            let printLine = [];

            for (let ingredient in storage) {
                printLine.push(`${ingredient}=${storage[ingredient]}`);
            }

            return printLine.join(' ');
        }
    }
}

let manager = solution();
console.log (manager ("restock flavour 50"));
console.log (manager ("prepare lemonade 4"));

// console.log (manager ("restock flavour 50"));
// console.log (manager ("prepare lemonade 4"));
// console.log (manager ("restock carbohydrate 10"));
// console.log (manager ("restock flavour 10"));
// console.log (manager ("prepare apple 1"));
// console.log (manager ("restock fat 10"));
// console.log (manager ("prepare burger 1"));
// console.log (manager ("report"));