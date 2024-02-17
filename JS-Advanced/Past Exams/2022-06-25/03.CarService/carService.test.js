import { assert } from 'chai';
import { carService } from './carService.js';

describe("Testing carService functionality", function() {
    describe("Testing isItExpensive functionality", function() {
        it("Testing with heartbreaking data", function() {
            assert.equal(carService.isItExpensive('Engine'), 'The issue with the car is more severe and it will cost more money');
            assert.equal(carService.isItExpensive('Transmission'), 'The issue with the car is more severe and it will cost more money');
        });
        it("Testing with acceptable data", function() {
            assert.equal(carService.isItExpensive('Filter'), 'The overall price will be a bit cheaper');
        });
    });

    describe("Testing isItExpensive functionality", function() {
        it("Does not work with invalid input data", function () {
            assert.throws(() => carService.discount('NaN', 1), 'Invalid input');
            assert.throws(() => carService.discount(1, 'NaN'), 'Invalid input');
            assert.throws(() => carService.discount('NaN', 'NaN'), 'Invalid input');
        });
        it("Gives discount", function() {
            assert.equal(carService.discount(3, 100), `Discount applied! You saved 15$`);
            assert.equal(carService.discount(7, 100), `Discount applied! You saved 15$`);
            assert.equal(carService.discount(9, 100), `Discount applied! You saved 30$`);
        });
        it("No discount", function() {
            assert.equal(carService.discount(2, 100), "You cannot apply a discount");
        });
    });

    describe("Testing partsToBuy functionality", function() {
        it("Does not work with invalid input data", function () {
            assert.throws(() => carService.partsToBuy('NotArray', []), 'Invalid input');
            assert.throws(() => carService.partsToBuy([], 'NotArray'), 'Invalid input');
            assert.throws(() => carService.partsToBuy('NotArray', 'NotArray'), 'Invalid input');
        });
        it("Gives discount", function() {
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"]), 145);
        });
        it("No parts in partsCatalog", function() {
            assert.equal(carService.partsToBuy([], ["blowoff valve", "injectors"]), 0);
        });
    });
});
