import { expect } from 'chai';
import { sum } from './sumOfNumbers.js'

describe ('Testing sum', function () {
    it('Works with number array', () => {
        const arr = [1, 1, 1];

        expect(sum(arr)).to.equal(3);
    });

    it('Returns 0 for empty array', function () {
        expect(sum([])).to.equal(0);
    });
    
    it('Returns 1 for array with 1 element', function () {
        expect(sum([1])).to.equal(1);
    });
});

