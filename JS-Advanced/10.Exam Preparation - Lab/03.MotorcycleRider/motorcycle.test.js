import { assert } from 'chai';
import { motorcycleRider } from './motorcycleRider.js';

describe("Testing motorcycleRider functionality", function() { 
    describe("Testing licenseRestriction function", function() { 
        it("Does not work with non-string values", function() { 
            assert.throws(() => motorcycleRider.licenseRestriction(1), 'Invalid Information!'); 
        }); 
        it("Does not work with invalid category", function() { 
            assert.throws(() => motorcycleRider.licenseRestriction('B'), 'Invalid Information!'); 
        });
        it("Returns correct result with AM", function() { 
            assert.equal(motorcycleRider.licenseRestriction('AM'), 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'); 
        });
        it("Returns correct result with A1", function() { 
            assert.equal(motorcycleRider.licenseRestriction('A1'), 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'); 
        });
        it("Returns correct result with A2", function() { 
            assert.equal(motorcycleRider.licenseRestriction('A2'), 'Motorcycles with maximum power of 35KW. and the minimum age is 18.'); 
        });
        it("Returns correct result with A", function() { 
            assert.equal(motorcycleRider.licenseRestriction('A'), 'No motorcycle restrictions, and the minimum age is 24.'); 
        });
    }); 
    describe("Testing motorcycleShowroom function", function() { 
        it("Does not work with incorrect input values", function() { 
            assert.throws(() => motorcycleRider.motorcycleShowroom(1, 250), 'Invalid Information!'); 
            assert.throws(() => motorcycleRider.motorcycleShowroom([125, 250], 'NaN'), 'Invalid Information!'); 
            assert.throws(() => motorcycleRider.motorcycleShowroom(125, 'NaN'), 'Invalid Information!'); 
            assert.throws(() => motorcycleRider.motorcycleShowroom([], 250), 'Invalid Information!'); 
            assert.throws(() => motorcycleRider.motorcycleShowroom([125, 250], 1), 'Invalid Information!'); 
        }); 
        it("Returns correct results", function() { 
            assert.equal(motorcycleRider.motorcycleShowroom([125, 250, 600], 450), 'There are 2 available motorcycles matching your criteria!'); 
        });
    });
    describe("Testing otherSpendings function", function() { 
        it("Does not work with incorrect input values", function() { 
            assert.throws(() => motorcycleRider.otherSpendings(['helmet'], ['engine oil'], 1), 'Invalid Information!'); 
            assert.throws(() => motorcycleRider.otherSpendings(['helmet'], 1, true), 'Invalid Information!'); 
            assert.throws(() => motorcycleRider.otherSpendings(['helmet'], 1, 1), 'Invalid Information!'); 
            assert.throws(() => motorcycleRider.otherSpendings(1, ['engine oil'], true), 'Invalid Information!'); 
            assert.throws(() => motorcycleRider.otherSpendings(1, ['engine oil'], 1), 'Invalid Information!'); 
            assert.throws(() => motorcycleRider.otherSpendings(1, 1, true), 'Invalid Information!'); 
            assert.throws(() => motorcycleRider.otherSpendings(1, 1, 1), 'Invalid Information!');
        }); 
        it("Returns correct results with discount", function() { 
            assert.equal(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true), 'You spend $243.00 for equipment and consumables with 10% discount!'); 
            assert.equal(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true), 'You spend $540.00 for equipment and consumables with 10% discount!'); 
            assert.equal(motorcycleRider.otherSpendings(['helmet', 'test'], ['engine oil', 'test'], true), 'You spend $243.00 for equipment and consumables with 10% discount!'); 
        });
        it("Returns correct results without discount", function() { 
            assert.equal(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false), 'You spend $270.00 for equipment and consumables!'); 
            assert.equal(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false), 'You spend $600.00 for equipment and consumables!'); 
        });
    });
});