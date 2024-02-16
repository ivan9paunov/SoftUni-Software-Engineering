import { assert } from 'chai';
import { weddingDay } from './weddingDay.js';

describe("Testing weddingDay functionality", function() {
    describe("Testing pickVenue functionality", function() {
        it("Does not work with invalid input values", function() {
            assert.throws(() => weddingDay.pickVenue('NaN', 1, 'Varna'), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue('NaN', 'NaN', 'Varna'), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue('NaN', 1, 1), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue('NaN', 'NaN', 1), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue(1, 'NaN', 'Varna'), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue(1, 'NaN', 1), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue(1, 1, 1), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue(1, 1, ""), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue('NaN', 1, ""), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue(1, 'NaN', ""), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue('NaN', 'NaN', ""), 'Invalid Information!');
        });
        it("Does not work with incorrect location", function() {
            assert.throws(() => weddingDay.pickVenue(1, 1, 'Plovdiv'), 'The location of this venue is not in the correct area!');
        });
        it("Does work with max capacity", function() {
            assert.equal(weddingDay.pickVenue(150, 120, 'Varna'), 'This venue meets the requirements, with capacity of 150 guests and 120$ cover.');
        });
        it("Does not work with over capacity", function() {
            assert.equal(weddingDay.pickVenue(151, 121, 'Varna'), 'This venue does not meet your requirements!');
        });
     });

    describe("Testing otherSpendings functionality", function() {
        it("Does not work with invalid input values", function() {
            assert.throws(() => weddingDay.otherSpendings(1, [], true), 'Invalid Information!');
            assert.throws(() => weddingDay.otherSpendings(1, [], 1), 'Invalid Information!');
            assert.throws(() => weddingDay.otherSpendings(1, 1, true), 'Invalid Information!');
            assert.throws(() => weddingDay.otherSpendings(1, 1, 1), 'Invalid Information!');
            assert.throws(() => weddingDay.otherSpendings([], 1, true), 'Invalid Information!');
            assert.throws(() => weddingDay.otherSpendings([], 1, 1), 'Invalid Information!');
            assert.throws(() => weddingDay.otherSpendings([], [], 1), 'Invalid Information!');
        });
        it("With discount", function() {
            assert.equal(weddingDay.otherSpendings(['flowers'], ['video'], true), 'You spend 1530$ for wedding decoration and photography with 15% discount!');
            assert.equal(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true), 'You spend 2465$ for wedding decoration and photography with 15% discount!');
        });
        it("Without discount", function() {
            assert.equal(weddingDay.otherSpendings(['flowers'], ['video'], false), 'You spend 1800$ for wedding decoration and photography!');
            assert.equal(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false), 'You spend 2900$ for wedding decoration and photography!');
        });
     });

    describe("Testing otherSpendings functionality", function() {
        it("Does not work with invalid input values", function() {
            assert.throws(() => weddingDay.tableDistribution('NaN', 1), 'Invalid Information!');
            assert.throws(() => weddingDay.tableDistribution('NaN', 'NaN'), 'Invalid Information!');
            assert.throws(() => weddingDay.tableDistribution(1, 'NaN'), 'Invalid Information!');
            assert.throws(() => weddingDay.tableDistribution(0, 1), 'Invalid Information!');
        });
        it("With discount", function() {
            assert.equal(weddingDay.otherSpendings(['flowers'], ['video'], true), 'You spend 1530$ for wedding decoration and photography with 15% discount!');
            assert.equal(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true), 'You spend 2465$ for wedding decoration and photography with 15% discount!');
        });
        it("Without discount", function() {
            assert.equal(weddingDay.otherSpendings(['flowers'], ['video'], false), 'You spend 1800$ for wedding decoration and photography!');
            assert.equal(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false), 'You spend 2900$ for wedding decoration and photography!');
        });
     });
});
