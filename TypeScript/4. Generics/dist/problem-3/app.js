"use strict";
class CarDealership {
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
        this.modelsSold = {};
    }
    sellCar(dealerID, model) {
        this.soldCars++;
        this.modelsSold[dealerID] = model;
    }
    showDetails() {
        const carsSold = [];
        for (const element in this.modelsSold) {
            carsSold.push(`${element} sold ${this.modelsSold[element]}`);
        }
        return `${this.dealershipName}:\n${carsSold.join('\n')}`;
    }
}
let dealership = new CarDealership('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
