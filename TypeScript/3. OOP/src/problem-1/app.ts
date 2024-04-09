class Car {
    public _brand: string;
    public _model: string;
    public _horsepower: number;

    constructor(brand: string, model: string, horsepower: number) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(newBrand: string) {
        this._brand = newBrand;
    }

    get model(): string {
        return this._model;
    }

    set model(newModel: string) {
        this._model = newModel;
    }

    get horsepower(): number {
        return this._horsepower;
    }

    set horsepower(newPower: number) {
        this._horsepower = newPower;
    }
}

const carInfo = (data: string): void => {
    const [brand, model, powerAsString] = data.split(' ');
    const horsepower: number = Number(powerAsString);

    const myCar = new Car(brand, model, horsepower);
    console.log(`The car is: ${myCar.brand} ${myCar.model} - ${myCar.horsepower} HP.`);
}

carInfo('Chevrolet Impala 390');
console.log('---');
carInfo('Skoda Karoq 150');