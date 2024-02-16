import { assert } from 'chai';
import { recipeSelection } from './recipeSelection.js';

describe("Testing recipeSelection functionality", function() {
    describe("Testing isTypeSuitable functionality", function() {
        it("Testing the input with invalid values", function() {
            assert.throws(() => recipeSelection.isTypeSuitable(1, 'test'), 'Invalid input');
            assert.throws(() => recipeSelection.isTypeSuitable('test', 1), 'Invalid input');
            assert.throws(() => recipeSelection.isTypeSuitable(1, 1), 'Invalid input');
        });
        it('Not suitable', function () {
            assert.equal(recipeSelection.isTypeSuitable('Meat', 'Vegetarian'), 'This recipe is not suitable for vegetarians');
            assert.equal(recipeSelection.isTypeSuitable('Meat', 'Vegan'), 'This recipe is not suitable for vegans');
            assert.equal(recipeSelection.isTypeSuitable('Dairy', 'Vegan'), 'This recipe is not suitable for vegans');
        });
        it('Is suitable', function () {
            assert.equal(recipeSelection.isTypeSuitable('Meat', 'Human being'), 'This recipe is suitable for your dietary restriction');
        });
     });

    describe("Testing isItAffordable functionality", function() {
        it("Testing the input with invalid values", function() {
            assert.throws(() => recipeSelection.isItAffordable('NaN', 1), 'Invalid input');
            assert.throws(() => recipeSelection.isItAffordable(1, 'NaN'), 'Invalid input');
            assert.throws(() => recipeSelection.isItAffordable('NaN', 'NaN'), 'Invalid input');
        });
        it('Not enough budget', function () {
            assert.equal(recipeSelection.isItAffordable(20, 10), "You don't have enough budget to afford this recipe");
        });
        it('Enough budget', function () {
            assert.equal(recipeSelection.isItAffordable(10, 20), 'Recipe ingredients bought. You have 10$ left');
        });
     });

     describe("Testing getRecipesByCategory functionality", function() {
        it("Testing the input with invalid values", function() {
            assert.throws(() => recipeSelection.getRecipesByCategory(1, 'test'), 'Invalid input');
            assert.throws(() => recipeSelection.getRecipesByCategory([], 1), 'Invalid input');
            assert.throws(() => recipeSelection.getRecipesByCategory(1, 1), 'Invalid input');
        });
        it('Find titles', function () {
            assert.equal(recipeSelection.getRecipesByCategory([{title: "Spicy Tofu Stir-Fry", category: "Asian" }], 'Asian'), 'Spicy Tofu Stir-Fry');
        });
     });
});
