import { Drink } from "./Drink";

export class VendingMachine {
    private buttonCapacity: number;
    private drinks: Drink[];

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }

    addDrink(drink: Drink): void {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }

    removeDrink(name: string): boolean {
        const drinkIdx = this.drinks.findIndex(element => element.name == name);

        if (drinkIdx != -1) {
            this.drinks.splice(drinkIdx, 1);
            return true;
        }

        return false;
    }

    getLongest(): string {
        //Cloning the array to keep the original order of this.drinks
        const toSort = [...this.drinks];

        const longestDrink = toSort.sort((a, b) => b.volume - a.volume)[0];
        return longestDrink.toString();
    }

    getCheapest(): string {
        //Cloning the array to keep the original order of this.drinks
        const toSort = [...this.drinks];

        const cheapest = toSort.sort((a, b) => a.price - b.price)[0];
        return cheapest.toString();
    }

    buyDrink(name: string): string | undefined {
        const drink = this.drinks.find(element => element.name == name);
        return drink?.toString();
    }

    get getCount(): number {
        const drinksCount = this.drinks.length;
        return drinksCount;
    }

    report(): string {
        const allDrinks: string = this.drinks.map(element => element.toString()).join('\n');
        const reportMsg = `Drinks available:\n${allDrinks}`;
        return reportMsg;
    }
}