import { assert } from "chai";
import { rgbToHexColor } from './rgbToHex.js';

describe('Check color convertor', () => {
    it('Returns correct result', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000', 'Must be true!');
    });

    it('Returns correct result', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF', 'Must be true!');
    });

    it('Returns correct result', () => {
        assert.equal(rgbToHexColor(255, 165, 0), '#FFA500', 'Must be true!');
    });

    it('Does not work with non-number inputs', () => {
        assert.equal(rgbToHexColor('str', 1, 1), undefined, 'Must be false!');
        assert.equal(rgbToHexColor(1, 'str', 1), undefined, 'Must be false!');
        assert.equal(rgbToHexColor(1, 1, 'str'), undefined, 'Must be false!');
    });

    it('Does not work with numbers out of the range', () => {
        assert.equal(rgbToHexColor(-1, 1, 1), undefined, 'Must be false!');
        assert.equal(rgbToHexColor(1, -1, 1), undefined, 'Must be false!');
        assert.equal(rgbToHexColor(1, 1, -1), undefined, 'Must be false!');
        assert.equal(rgbToHexColor(256, 1, 1), undefined, 'Must be false!');
        assert.equal(rgbToHexColor(1, 256, 1), undefined, 'Must be false!');
        assert.equal(rgbToHexColor(1, 1, 256), undefined, 'Must be false!');
    });

    it('Does not work with less than 3 input values', () => {
        assert.equal(rgbToHexColor(), undefined, 'Must be false!');
        assert.equal(rgbToHexColor(1), undefined, 'Must be false!');
        assert.equal(rgbToHexColor(1, 1), undefined, 'Must be false!');
    });
});