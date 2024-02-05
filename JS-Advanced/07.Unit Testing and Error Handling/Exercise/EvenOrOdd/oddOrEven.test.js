import { assert } from "chai";
import { isOddOrEven } from './isOddOrEven.js';

describe('Check if the length is odd or even', function () {
    it('Test with non string value', () => {
        assert.equal(isOddOrEven({prop: 'Example'}), undefined, 'Returned type must be undefined');
        assert.equal(isOddOrEven(5), undefined, 'Returned type must be undefined');
        assert.isNotOk(isOddOrEven([]), 'Returned type must be undefined');
    });

    it('Test with valid string value', () => {
        assert.equal(isOddOrEven('test'), 'even', 'Works correctly');
        assert.equal(isOddOrEven('another'), 'odd', 'Works correctly');
    });
});