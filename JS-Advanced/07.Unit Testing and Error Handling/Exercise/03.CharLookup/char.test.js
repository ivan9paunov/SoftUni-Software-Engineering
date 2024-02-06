import { assert } from "chai";
import { lookupChar } from './charLookUp.js';

describe('Testing char function', () => {
    it('Testing without parameters', () => {
        assert.equal(lookupChar(), undefined, 'Must be incorrect!');
    });
    it('Testing with only one parameter', () => {
        assert.equal(lookupChar('data'), undefined, 'Must be incorrect!');
    });

    it('Testing with number instead of string parameter', () => {
        assert.equal(lookupChar(1, 1), undefined, 'Must be incorrect!');
    });
    it('Testing with array instead of string parameter', () => {
        assert.equal(lookupChar(['data'], 1), undefined, 'Must be incorrect!');
    });
    it('Testing with object instead of string parameter', () => {
        assert.equal(lookupChar({test: 'data'}, 1), undefined, 'Must be incorrect!');
    });
    
    it('Testing with string instead of number parameter', () => {
        assert.equal(lookupChar('test', '1'), undefined, 'Must be incorrect!');
    });
    it('Testing with array instead of number parameter', () => {
        assert.equal(lookupChar('test', [1]), undefined, 'Must be incorrect!');
    });
    it('Testing with object instead of number parameter', () => {
        assert.equal(lookupChar('test', {num: 1}), undefined, 'Must be incorrect!');
    });
    it('Testing with floating number as parameter', () => {
        assert.equal(lookupChar('test', 1.5), undefined, 'Must be incorrect!');
    });

    it('Testing if the index is valid', () => {
        assert.equal(lookupChar('test', -1), 'Incorrect index', 'Must be incorrect!');
        assert.equal(lookupChar('test', 4), 'Incorrect index', 'Must be incorrect!');
    });
    
    it('Testing with correct data', () => {
        assert.equal(lookupChar('test', 1), 'e', 'Must be correct!');
    });
});