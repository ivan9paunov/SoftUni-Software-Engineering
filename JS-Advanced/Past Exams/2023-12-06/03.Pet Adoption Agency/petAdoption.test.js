import { assert } from 'chai';
import { petAdoptionAgency } from './petAdoptionAgency.js';

describe("Testing Pet Adoption Agency functionality", function () {
    describe("Testing isPetAvailable function", function () {
        it("Does not works with incorect type of values", function () {
            assert.throws(() => petAdoptionAgency.isPetAvailable(1, 1, true), 'Invalid input');
            assert.throws(() => petAdoptionAgency.isPetAvailable(1, 'NaN', true), 'Invalid input');
            assert.throws(() => petAdoptionAgency.isPetAvailable(1, 1, 'notBoolean'), 'Invalid input');
            assert.throws(() => petAdoptionAgency.isPetAvailable(1, 'NaN', 'notBoolean'), 'Invalid input');
            assert.throws(() => petAdoptionAgency.isPetAvailable('dog', 'NaN', true), 'Invalid input');
            assert.throws(() => petAdoptionAgency.isPetAvailable('dog', 'NaN', 'notBoolean'), 'Invalid input');
            assert.throws(() => petAdoptionAgency.isPetAvailable('dog', 1, 'notBoolean'), 'Invalid input');
        });
        it("No pets available", function () {
            assert.equal(petAdoptionAgency.isPetAvailable('dog', 0, true), 'Sorry, there are no dog(s) available for adoption at the agency.');
            assert.equal(petAdoptionAgency.isPetAvailable('dog', -1, true), 'Sorry, there are no dog(s) available for adoption at the agency.');
        });
        it("If vaccinated", function () {
            assert.equal(petAdoptionAgency.isPetAvailable('dog', 1, true), 'Great! We have 1 vaccinated dog(s) available for adoption at the agency.');
        });
        it("If not vaccinated", function () {
            assert.equal(petAdoptionAgency.isPetAvailable('dog', 1, false), 'Great! We have 1 dog(s) available for adoption, but they need vaccination.');
        });
    });
    describe("Testing getRecommendedPets function", function () {
        it("Does not works with incorect type of values", function () {
            assert.throws(() => petAdoptionAgency.getRecommendedPets(1, 'str'), 'Invalid input');
            assert.throws(() => petAdoptionAgency.getRecommendedPets([], 1), 'Invalid input');
            assert.throws(() => petAdoptionAgency.getRecommendedPets(1, 1), 'Invalid input');
        });
        it("Threat available", function () {
            assert.equal(petAdoptionAgency.getRecommendedPets([{name: 'dog', traits: 'bone'}], 'bone'), 'Recommended pets with the desired traits (bone): dog');
        });
        it("No threat available", function () {
            assert.equal(petAdoptionAgency.getRecommendedPets([{name: 'dog', traits: 'doll'}], 'bone'), 'Sorry, we currently have no recommended pets with the desired traits: bone.');
        });
    });
    describe("Testing getRecommendedPets function", function () {
        it("Does not works with incorect type of values", function () {
            assert.throws(() => petAdoptionAgency.adoptPet(1, 'str'), 'Invalid input');
            assert.throws(() => petAdoptionAgency.adoptPet('str', 1), 'Invalid input');
            assert.throws(() => petAdoptionAgency.adoptPet(1, 1), 'Invalid input');
        });
        it("Threat available", function () {
            assert.equal(petAdoptionAgency.adoptPet('dog', 'Larry'), 'Congratulations, Larry! You have adopted dog from the agency. Enjoy your time with your new furry friend!');
        });
    });
});
