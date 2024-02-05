import { assert } from "chai";
import { isSymmetric } from './checkForSymmetry.js';

describe('Testing symmetry', function () {
    it('Works with array', function () {
        assert.isOk(isSymmetric([])), 'It works!';
    });

    it('Does not work with array', function () {
        assert.isNotOk(isSymmetric('NotWork'), 'Returned type must be undefined!');
        assert.isNotOk(isSymmetric(1), 'Returned type must be undefined!');
        assert.isNotOk(isSymmetric({test: 'test'}), 'Returned type must be undefined!');
        assert.isNotOk(isSymmetric(undefined), 'Returned type must be undefined!');
    });

    it('Returns true with numbers', function () {
        assert.isOk(isSymmetric([1, 1, 1]), 'Works correctly!');
        assert.isOk(isSymmetric([1, 0, 0, 1]), 'Works correctly!');
        assert.isOk(isSymmetric([1]), 'Works correctly!');
    });
    
    it('Returns true with string values', function () {
        assert.isOk(isSymmetric(['yes', 'no', 'yes']), 'Works correctly!');
    });

    it('Returns false with numbers', function () {
        assert.isNotOk(isSymmetric([1, 2, 3]), 'Must be false!');
    });

    it('Returns false with mixed values', function () {
        assert.isNotOk(isSymmetric([1, 2, '1']), 'Must be false!');
    });
    
    it('Returns false with string values', function () {
        assert.isNotOk(isSymmetric(['yes', 'yes', 'no']), 'Must be false!');
    });

    it('Returns false with string floating numbers', function () {
        assert.isNotOk(isSymmetric(["0.1", 0.2, "0.3"]), 'Must be false!');
    });
});