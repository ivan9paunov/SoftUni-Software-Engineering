import { assert } from 'chai';
import { planYourTrip } from './planYourTrip.js';

describe("Testing planYourTrip functionality", function () {
    describe("Testing choosingDestination functionality", function () {
        it('should throw an error for invalid year', () => {
            assert.throws(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023), Error, 'Invalid Year!');
        });

        it('should return correct message for valid season', () => {
            const result = planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024);
            assert.strictEqual(result, 'Great choice! The Winter is the perfect time to visit the Ski Resort.');
        });

        it('should return correct message for incorrect season', () => {
            const result = planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024);
            assert.strictEqual(result, 'Consider visiting during the Winter for the best experience at the Ski Resort.');
        });

        it('should throw an error for invalid destination', () => {
            assert.throws(() => planYourTrip.choosingDestination('Beach', 'Summer', 2024), Error, 'This destination is not what you are looking for.');
        });
    });

    describe("Testing exploreOptions functionality", function () {
        it('should throw an error for invalid activities input', () => {
            assert.throws(() => planYourTrip.exploreOptions(null, 0), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions('invalid', 0), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions([], 0), Error, 'Invalid Information!');
        });

        it('should throw an error for invalid activityIndex input', () => {
            assert.throws(() => planYourTrip.exploreOptions([], null), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions([], 'invalid'), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions([], -1), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions([], 10), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions([], 0.5), Error, 'Invalid Information!');
        });

        it('should not throw an error for valid inputs', () => {
            const activities = ["Skiing", "Snowboarding", "Winter Hiking"];
            assert.strictEqual(planYourTrip.exploreOptions(activities, 1), 'Skiing, Winter Hiking');
        });
    });

    describe("Testing estimateExpenses functionality", function () {
        it('should throw an error for invalid distanceInKilometers input', () => {
            assert.throws(() => planYourTrip.estimateExpenses(null, 50), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses('invalid', 50), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(-10, 50), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(0, 50), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses([], 50), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses({}, 50), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(undefined, 50), Error, 'Invalid Information!');
        });

        it('should throw an error for invalid fuelCostPerLiter input', () => {
            assert.throws(() => planYourTrip.estimateExpenses(100, null), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(100, 'invalid'), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(100, -5), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(100, 0), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(100, []), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(100, {}), Error, 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(100, undefined), Error, 'Invalid Information!');
        });

        it('should calculate correctly for budget-friendly', () => {
            const result = planYourTrip.estimateExpenses(200, 2.5);
            assert.strictEqual(result, 'The trip is budget-friendly, estimated cost is $500.00.');
        });

        it('should calculate correctly for not budget-friendly', () => {
            const result = planYourTrip.estimateExpenses(300, 3.5);
            assert.strictEqual(result, 'The estimated cost for the trip is $1050.00, plan accordingly.');
        });
    });
});
