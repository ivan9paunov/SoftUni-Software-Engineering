import { assert } from "chai";
import { mathEnforcer } from './mathEnforcer.js';

describe('Testing mathEnforcer functionality', () => {
    describe('Testing addFive functionality', () => {
        it('Should return undefined for non-number parameter', () => {
            assert.isNotOk(mathEnforcer.addFive('1'), undefined, 'Must be undefined');
            assert.isNotOk(mathEnforcer.addFive([1]), undefined, 'Must be undefined');
        });

        it('Should return correct result with a number parameter', () => {
            assert.equal(mathEnforcer.addFive(1), 6, 'Must be correct!');
            assert.equal(mathEnforcer.addFive(-1), 4, 'Must be correct!');
            assert.equal(mathEnforcer.addFive(1.1), 6.1, 'Must be correct!');
        });
    });

    describe('Testing subtractTen functionality', () => {
        it('Should return undefined for non-number parameter', () => {
            assert.isNotOk(mathEnforcer.subtractTen('1'), undefined, 'Must be undefined');
            assert.isNotOk(mathEnforcer.subtractTen([1]), undefined, 'Must be undefined');
        });

        it('Should return correct result with a number parameter', () => {
            assert.equal(mathEnforcer.subtractTen(1), -9, 'Must be correct!');
            assert.equal(mathEnforcer.subtractTen(-1), -11, 'Must be correct!');
            assert.equal(mathEnforcer.subtractTen(1.1), -8.9, 'Must be correct!');
        });
    });

    describe('Testing sum functionality', () => {
        it('Should return undefined for non-number parameters', () => {
            assert.isNotOk(mathEnforcer.sum(1), undefined, 'Must be undefined');
            assert.isNotOk(mathEnforcer.sum('1', 1), undefined, 'Must be undefined');
            assert.isNotOk(mathEnforcer.sum(1, '1'), undefined, 'Must be undefined');
            assert.isNotOk(mathEnforcer.sum('1', '1'), undefined, 'Must be undefined');
            assert.isNotOk(mathEnforcer.sum([1], 1), undefined, 'Must be undefined');
            assert.isNotOk(mathEnforcer.sum(1, [1]), undefined, 'Must be undefined');
            assert.isNotOk(mathEnforcer.sum([1], [1]), undefined, 'Must be undefined');
        });

        it('Should return correct result with a number parameter', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2, 'Must be correct!');
            assert.equal(mathEnforcer.sum(-1, 1), 0, 'Must be correct!');
            assert.equal(mathEnforcer.sum(1, -1), 0, 'Must be correct!');
        });

        it('Should return correct result with a floating numbers', () => {
            const result = mathEnforcer.sum(0.1, 0.2);
            const expectedSum = 0.3;

            assert.closeTo(result, expectedSum, 0.01);
        });
    });
});