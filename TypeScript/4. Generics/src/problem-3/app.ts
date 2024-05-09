interface Dealership<T> {
    dealershipName: T,
    soldCars: number
}

interface Actions<T> {
    sellCar(dealerID: T, model: T): void
}

class CarDealership implements Dealership<string>, Actions<string> {
    dealershipName: string;
    soldCars: number;
    modelsSold: object;

    constructor(dealershipName: string) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
        this.modelsSold = {}
    }

    sellCar(dealerID: string, model: string): void {
        this.soldCars++;
    }
}