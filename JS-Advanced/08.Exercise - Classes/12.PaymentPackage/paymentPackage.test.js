import { assert } from 'chai';
import { PaymentPackage } from './PaymentPackage.js';

describe('Checking payment functionality', function() {
    it('Contains name, value, VAT and active', function () {
        const test = new PaymentPackage('HR Services', 1);
        assert.isOk(test.name);
        assert.isOk(test.value);
        assert.isOk(test.VAT);
        assert.isOk(test.active);
        assert.isOk(test.active === true);
        assert.isOk(test.toString);
    });

    it('Does not work with no parameters', function() {
        assert.throws(() => new PaymentPackage(), 'Name must be a non-empty string');
    });

    it("Checking name", function() { 
        assert.isOk(new PaymentPackage('HR Services', 1), 'Must be true');
        assert.throws(() => new PaymentPackage('', 1), 'Name must be a non-empty string');
        assert.throws(() => new PaymentPackage(1, 1), 'Name must be a non-empty string');
    });

    it("Checking value", function() { 
        assert.isOk(new PaymentPackage('HR Services', 1), 'Must be true');
        assert.throws(() => new PaymentPackage('HR Services'), 'Value must be a non-negative number');
        assert.throws(() => new PaymentPackage('HR Services', -1), 'Value must be a non-negative number');
        assert.throws(() => new PaymentPackage('HR Services', 'text'), 'Value must be a non-negative number');
    });

    it("Setting new data - Success", function() { 
        const test = new PaymentPackage('HR Services', 1);
        assert.equal(test.name = 'Consultation', 'Consultation', 'Must be OK');
        assert.equal(test.value = 0, 0, 'Must be OK');
        
    });

    it("Setting new data - Failure", function() { 
        const test = new PaymentPackage('HR Services', 1);
        assert.throws(() => test.name = 1, Error, 'Name must be a non-empty string');
        assert.throws(() => test.value = 'test', Error, 'Value must be a non-negative number');
        
    });

    it("Checking VAT", function() { 
        const test = new PaymentPackage('HR Services', 1);
        assert.isOk(test.VAT === 20);
        assert.equal(test.VAT = 1, 1, 'Must be ok');
        assert.throws(() => test.VAT = -1, 'VAT must be a non-negative number');
        assert.throws(() => test.VAT = 'test', 'VAT must be a non-negative number');
    });

    it("Checking active", function() { 
        const test = new PaymentPackage('HR Services', 1);
        test.active = false;
        assert.isFalse(test.active);
        assert.isBoolean(test.active, 'Must be boolean');
        assert.throws(() => test.active = null, 'Active status must be a boolean');
    });
    
    it("Checking default toString", function() { 
        const test = new PaymentPackage('HR Services', 1);
        assert.equal(test.toString(), `Package: HR Services\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2`);
    });

    it("Checking toString with modified values", function() { 
        const test = new PaymentPackage('HR Services', 1);
        test.VAT = 10;
        test.active = false;

        assert.equal(test.toString(), `Package: HR Services (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 10%): 1.1`);
    });
});