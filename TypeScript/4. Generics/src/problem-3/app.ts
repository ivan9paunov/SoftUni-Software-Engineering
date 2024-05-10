interface Dealership<T> {
    dealershipName: T,
    soldCars: number
}

type MyKeyType = string | symbol | number;

type ModelsSold<T> = {
    [key: MyKeyType]: T;
}

interface Actions<T> {
    sellCar(dealerID: MyKeyType, model: T): void
}

class CarDealership<T, U> implements Dealership<T>, Actions<U> {
    dealershipName: T;
    soldCars: number;
    modelsSold: ModelsSold<U>;

    constructor(dealershipName: T) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
        this.modelsSold = {};
    }

    sellCar(dealerID: MyKeyType, model: U): void {
        this.soldCars++;
        this.modelsSold[dealerID] = model;
    }

    showDetails(): string {
        const carsSold: string[] = [];

        for (const element in this.modelsSold) {
            carsSold.push(`${element} sold ${this.modelsSold[element]}`);
        }

        return `${this.dealershipName}:\n${carsSold.join('\n')}`;
    }
}

let dealership = new CarDealership<string, string>('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
