import { assert } from "chai";
import { createCalculator } from './addSubtract.js'

describe('Testing calculating function', () => {
    it('Contains the required methods', () => {
        const calc = createCalculator();
        assert.isOk(calc.hasOwnProperty('add'), 'Must be true!');
        assert.isOk(calc.hasOwnProperty('subtract'), 'Must be true!');
        assert.isOk(calc.hasOwnProperty('get'), 'Must be true!');
    });

    it('The internal value must be 0', () => {
        const calc = createCalculator();
        assert.equal(calc.get(), 0, 'Must be true!');
    });

    it('Testing add calculation with number', () => {
        const calc = createCalculator();
        calc.add(5);
        assert.equal(calc.get(), 5, 'Must be correct!');

        calc.add(15);
        assert.equal(calc.get(), 20, 'Must be correct!');
    });

    it('Testing add calculation with number as string', () => {
        const calc = createCalculator();
        calc.add(5);
        assert.equal(calc.get(), 5, 'Must be correct!');

        calc.add('15');
        assert.equal(calc.get(), 20, 'Must be correct!');
    });

    it('Testing add calculation with string', () => {
        const calc = createCalculator();
        calc.add('five');
        assert.isNotOk(calc.get(), "Must not work with string value");
    });

    it('Testing subtract calculation with number', () => {
        const calc = createCalculator();
        calc.subtract(5);
        assert.equal(calc.get(), -5, "Must Subtract correctly");
    
        calc.subtract(10);
        assert.equal(calc.get(), -15, "Must subtract correctly");
    });

    it('Testing subtract calculation with number as string', () => {
        const calc = createCalculator();
        calc.subtract(5);
        assert.equal(calc.get(), -5, "Must subtract correctly");
        
        calc.subtract('10');
        assert.equal(calc.get(), -15, "Must subtract correctly");
    });

    it('Testing subtract calculation with string', () => {
        const calc = createCalculator();
        calc.subtract('five');
        assert.isNotOk(calc.get(), "Must not work with string value");
    });
});