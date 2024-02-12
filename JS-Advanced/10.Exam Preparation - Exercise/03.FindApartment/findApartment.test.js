import { assert } from 'chai';
import { findNewApartment } from './findApartment.js';

describe('Testing find apartmeny functionality', function () {
    describe('Testing isGoodLocation function', function () {
        it('Testing isGoodLocation with invalid city', function () {
            assert.equal(findNewApartment.isGoodLocation('Burgas', true), 'This location is not suitable for you.');
        });

        it('Testing isGoodLocation with false value', function () {
            assert.equal(findNewApartment.isGoodLocation('Sofia', false), 'There is no public transport in area.');
        });

        it('Testing isGoodLocation with truthy values', function () {
            assert.equal(findNewApartment.isGoodLocation('Sofia', true), 'You can go on home tour!');
        });

        it('Testing isGoodLocation with falsy values', function () {
            assert.throw(() => findNewApartment.isGoodLocation(1, 'test'), 'Invalid input!');
        });
    });

    describe('Testing isLargeEnough function', function () {
        it('Testing isLargeEnough with invalid inputs', function () {
            assert.throw(() => findNewApartment.isLargeEnough(1, 1), 'Invalid input!');
            assert.throw(() => findNewApartment.isLargeEnough([], 1), 'Invalid input!');
            assert.throw(() => findNewApartment.isLargeEnough([10, 20, 30], 'test'), 'Invalid input!');
        });

        it('Testing isLargeEnough with correct values', function() {
            assert.equal(findNewApartment.isLargeEnough([10, 20, 30], 5), '10, 20, 30');
            assert.equal(findNewApartment.isLargeEnough([10, 20, 30], 10), '10, 20, 30');
            assert.equal(findNewApartment.isLargeEnough([10, 20, 30], 15), '20, 30');
        });
    });

    describe('Testing isItAffordable function', function () {
        it('Testing isItAffordable with invalid inputs', function () {
            assert.throw(() => findNewApartment.isItAffordable('test', 1), 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable(1, 'test'), 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable('test', 'test'), 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable(-1, 1), 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable(1, -1), 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable(-1, -1), 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable(1, 0), 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable(0, 1), 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable(0, 0), 'Invalid input!');
        });

        it('Testing isItAffordable with correct values', function() {
            assert.equal(findNewApartment.isItAffordable(2, 1), "You don't have enough money for this house!");
            assert.equal(findNewApartment.isItAffordable(1, 2), "You can afford this home!");
        });
    });
});