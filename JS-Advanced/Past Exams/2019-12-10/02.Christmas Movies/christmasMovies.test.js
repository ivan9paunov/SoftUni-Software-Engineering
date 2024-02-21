import { assert } from 'chai';
import { ChristmasMovies } from './christmasMovies.js'

describe("Testing Christmas movies functionality", function () {
    let christmas = {};

	beforeEach(() => christmas = new ChristmasMovies());

    describe("Testing buyMovie functionality", function () {
        it("Already have the movie", function () {
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            
            assert.throws(() => christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']), 'You already own Home Alone 2 in your collection!');
        });
        it("Adds the movie to your collection", function () {
            assert.equal(christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']), 'You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!');
        });
    });

    describe("Testing discardMovie functionality", function () {
        it("Don't have the movie in your collection", function () {
            assert.throws(() => christmas.discardMovie('Home Alone 2', ['Macaulay Culkin']), 'Home Alone 2 is not at your collection!');
        });
        it("The movie is not wathched", function () {
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);

            assert.throws(() => christmas.discardMovie('Home Alone 2', ['Macaulay Culkin']), 'Home Alone 2 is not watched!');
        });
        it("Discard the movie", function () {
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.watchMovie('Home Alone 2');

            assert.equal(christmas.discardMovie('Home Alone 2'), 'You just threw away Home Alone 2!');
        });
    });

    describe("Testing watchMovie functionality", function () {
        it("Don't have the movie in your collection", function () {
            assert.throws(() => christmas.watchMovie('Home Alone 2'), 'No such movie in your collection!');
        });
    });

    describe("Testing favouriteMovie functionality", function () {
        it("Haven't watched any movie", function () {
            assert.throws(() => christmas.favouriteMovie(), 'You have not watched a movie yet this year!');
        });
        it("Movies with equal times watched", function () {
            christmas.watched['Home Alone 2'] = 1;
            christmas.watched['Last Christmas'] = 1;
            
            assert.equal(christmas.favouriteMovie(), 'Your favourite movie is Home Alone 2 and you have watched it 1 times!');
        });
        it("Favourite movie", function () {
            christmas.watched['Home Alone 2'] = 2;
            christmas.watched['Last Christmas'] = 1;

            assert.equal(christmas.favouriteMovie(), 'Your favourite movie is Home Alone 2 and you have watched it 2 times!');
        });
    });

    describe("Testing mostStarredActor functionality", function () {
        it("Haven't bought any movie", function () {
            assert.throws(() => christmas.mostStarredActor(), 'You have not watched a movie yet this year!');
        });
        it("Most starred actor", function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            
            assert.equal(christmas.mostStarredActor(), 'The most starred actor is Macaulay Culkin and starred in 2 movies!');
        });
    });
});
