import { assert } from 'chai';
import { planYourTrip } from './planYourTrip.js';

describe("Testing planYourTrip functionality", function() {
    describe("Testing choosingDestination functionality", function() {
        it("Does not work with invalid year", function() {
            assert.throws(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2025), 'Invalid Year!');
        });
        it("Does not work with invalid year", function() {
            assert.throws(() => planYourTrip.choosingDestination('Ski Resort', 'Summer', 2025), 'Invalid Year!');
        });
        it("Does not work with invalid year", function() {
            assert.throws(() => planYourTrip.choosingDestination('Hisarya', 'Winter', 2025), 'Invalid Year!');
        });
        it("Does not work with invalid destination", function() {
            assert.throws(() => planYourTrip.choosingDestination('Hisarya', 'Winter', 2024), 'This destination is not what you are looking for.');
        });
        it("Does not work with invalid destination", function() {
            assert.throws(() => planYourTrip.choosingDestination('Hisarya', 'Summer', 2025), 'Invalid Year!');
        });
        it("Does not work with invalid destination", function() {
            assert.throws(() => planYourTrip.choosingDestination('Hisarya', 'Summer', 2024), 'This destination is not what you are looking for.');
        });
        it("Does work with correct season", function() {
            assert.equal(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024), 'Great choice! The Winter is the perfect time to visit the Ski Resort.');
        });
        it("Does not work with incorrect season", function() {
            assert.equal(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024), 'Consider visiting during the Winter for the best experience at the Ski Resort.');
        });
    });

    describe("Testing exploreOptions functionality", function() {
        it("Does not work with invalid first inputs", function() {
            assert.throws(() => planYourTrip.exploreOptions('NotArray', 1), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions('NotArray', 0.5), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions('NotArray', 'NaN'), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions('NotArray', []), 'Invalid Information!');
        });
        it("Does not work with invalid second inputs", function() {
            assert.throws(() => planYourTrip.exploreOptions(['Skiing'], 'NaN'), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions(['Skiing'], [1]), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions(['Skiing'], -1), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 0.5), 'Invalid Information!');
        });
        it("Does not work with invalid index", function() {
            assert.throws(() => planYourTrip.exploreOptions([], 0), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions(['Skiing'], 1), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding']), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions(1), 'Invalid Information!');
        });
        it('should not throw an error for valid inputs', () => {
            assert.doesNotThrow(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 0), 'Snowboarding');
        });
        it("Does work with correct data", function() {
            assert.equal(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2), 'Skiing, Snowboarding');
            assert.equal(planYourTrip.exploreOptions(["Skiing"], 0), '');
            assert.equal(planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 0), 'Snowboarding');
        });
    });
    
    describe("Testing estimateExpenses functionality", function() {
        it("Does not work with invalid inputs", function() {
            assert.throws(() => planYourTrip.estimateExpenses('NaN', 1), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses('NaN', -1), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses('NaN', 0), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(1, 'NaN'), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(-1, 'NaN'), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(0, 'NaN'), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses('NaN', 'NaN'), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(0, 1), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(1, 0), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(0, 0), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(-1, 1), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(1, -1), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(-1, -1), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(-1, 0), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(0, -1), 'Invalid Information!');
        });

        it('should not throw an error for valid inputs', () => {
            assert.doesNotThrow(() => planYourTrip.estimateExpenses(200, 2.5));
        });

        it("Does work with budget data", function() {
            assert.strictEqual(planYourTrip.estimateExpenses(100, 5), 'The trip is budget-friendly, estimated cost is $500.00.');
            assert.strictEqual(planYourTrip.estimateExpenses(1, 1), 'The trip is budget-friendly, estimated cost is $1.00.');
        });
        it("Does work with budget data float", function() {
            assert.strictEqual(planYourTrip.estimateExpenses(100, 4.5), 'The trip is budget-friendly, estimated cost is $450.00.');
            assert.strictEqual(planYourTrip.estimateExpenses(10.5, 1), 'The trip is budget-friendly, estimated cost is $10.50.');
            assert.strictEqual(planYourTrip.estimateExpenses(10.5, 1.5), 'The trip is budget-friendly, estimated cost is $15.75.');
        });
        it("Does work with expensive data", function() {
            assert.strictEqual(planYourTrip.estimateExpenses(100, 6), 'The estimated cost for the trip is $600.00, plan accordingly.');
        });
        it("Does work with expensive data floating", function() {
            assert.strictEqual(planYourTrip.estimateExpenses(100, 5.01), 'The estimated cost for the trip is $501.00, plan accordingly.');
            assert.strictEqual(planYourTrip.estimateExpenses(100.5, 5), 'The estimated cost for the trip is $502.50, plan accordingly.');
            assert.strictEqual(planYourTrip.estimateExpenses(100.5, 5.5), 'The estimated cost for the trip is $552.75, plan accordingly.');
        });
    });
    describe("Testing if functions exist", function() {
        it('Contains choosingDestination(), exploreOptions() and estimateExpenses()', ()=>{
            assert.isTrue(planYourTrip.hasOwnProperty('choosingDestination'));
            assert.isTrue(planYourTrip.hasOwnProperty('exploreOptions'));
            assert.isTrue(planYourTrip.hasOwnProperty('estimateExpenses'));
        });
    });
});
