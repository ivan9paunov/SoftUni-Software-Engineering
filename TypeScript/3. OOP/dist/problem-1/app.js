"use strict";
class Car {
    constructor(brand, model, horsepower) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }
    get brand() {
        return this._brand;
    }
    set brand(newBrand) {
        this._brand = newBrand;
    }
    get model() {
        return this._model;
    }
    set model(newModel) {
        this._model = newModel;
    }
    get horsepower() {
        return this._horsepower;
    }
    set horsepower(newPower) {
        this._horsepower = newPower;
    }
}
const carInfo = (data) => {
    const [brand, model, powerAsString] = data.split(' ');
    const horsepower = Number(powerAsString);
    const myCar = new Car(brand, model, horsepower);
    console.log(`The car is: ${myCar.brand} ${myCar.model} - ${myCar.horsepower} HP.`);
};
carInfo('Chevrolet Impala 390');
console.log('---');
carInfo('Skoda Karoq 150');
