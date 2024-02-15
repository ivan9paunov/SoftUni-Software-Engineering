import { assert } from 'chai';
import { chooseYourCar } from './chooseYourCar.js';

describe("Testing chooseYourCar functionality", function() {
    describe("Testing choosingType function", function() {
        it("Does not work with invalid year", function() {
            assert.throws(() => chooseYourCar.choosingType('Sedan', 'blue', 1899), 'Invalid Year!');
            assert.throws(() => chooseYourCar.choosingType('Sedan', 'blue', 2023), 'Invalid Year!');
        });
        it("Does not work with invalid type", function() {
            assert.throws(() => chooseYourCar.choosingType('Hatchback', 'blue', 2002), 'This type of car is not what you are looking for.');
        });
        it("Works with new cars", function() {
            assert.equal(chooseYourCar.choosingType('Sedan', 'blue', 2010), 'This blue Sedan meets the requirements, that you have.');
        });
        it("Works with old cars", function() {
            assert.equal(chooseYourCar.choosingType('Sedan', 'blue', 2009), 'This Sedan is too old for you, especially with that blue color.');
        });
     });
    describe("Testing brandName function", function() {
        it("Does not work with invalid input data", function() {
            assert.throws(() => chooseYourCar.brandName('notArray', 1), 'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName('notArray', 'NaN'), 'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName(['BWM'], 1.5), 'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName(['BWM'], -1), 'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName(['BWM'], 1), 'Invalid Information!');

        });
        it("Works with correct data", function() {
            assert.equal(chooseYourCar.brandName(['BMW', 'Mercedes', 'Ford'], 1), 'BMW, Ford');
        });
     });
    describe("Testing carFuelConsumption function", function() {
        it("Does not work with invalid input data", function() {
            assert.throws(() => chooseYourCar.carFuelConsumption('NaN', 1), 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(1, 'NaN'), 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption('NaN', 'NaN'), 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(0, 1), 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(-1, 1), 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(1, 0), 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(1, -1), 'Invalid Information!');
        });
        it("Works correct with 7 or less liters", function() {
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), 'The car is efficient enough, it burns 7.00 liters/100 km.');
            assert.equal(chooseYourCar.carFuelConsumption(100, 6.6), 'The car is efficient enough, it burns 6.60 liters/100 km.');
        });
        it("Works correct with more than 7 liters", function() {
            assert.equal(chooseYourCar.carFuelConsumption(100, 9), 'The car burns too much fuel - 9.00 liters!');
        });
     });
});
