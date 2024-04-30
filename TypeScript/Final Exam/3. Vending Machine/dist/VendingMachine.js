"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const drinkIdx = this.drinks.findIndex(element => element.name == name);
        if (drinkIdx != -1) {
            this.drinks.splice(drinkIdx, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        //Cloning the array to keep the original order of this.drinks
        const toSort = [...this.drinks];
        const longestDrink = toSort.sort((a, b) => b.volume - a.volume)[0];
        return longestDrink.toString();
    }
    getCheapest() {
        //Cloning the array to keep the original order of this.drinks
        const toSort = [...this.drinks];
        const cheapest = toSort.sort((a, b) => a.price - b.price)[0];
        return cheapest.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find(element => element.name == name);
        return drink?.toString();
    }
    get getCount() {
        const drinksCount = this.drinks.length;
        return drinksCount;
    }
    report() {
        const allDrinks = this.drinks.map(element => element.toString()).join('\n');
        const reportMsg = `Drinks available:\n${allDrinks}`;
        return reportMsg;
    }
}
exports.VendingMachine = VendingMachine;
