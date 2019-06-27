const PaymentPackage = require('./08.PaymentPackage').PaymentPackage;
const expect = require('chai').expect;

describe('Payment Package', function () {

    let paymentPackage;
    beforeEach(function () {
        paymentPackage = new PaymentPackage('Consultation', 100);
    });

    describe('constructor', function () {
        it('VAT property default value should be 20', function () {
            const expected = 20;
            const actual = paymentPackage.VAT;

            expect(expected).to.equal(actual);
        });

        it('active property default value should be true', function () {

            expect(paymentPackage.active).to.be.true
        });

        it('should initialize with the correct name', function () {
            const expected = 'Consultation';
            const actual = paymentPackage.name;

            expect(expected).to.equal(actual);
        });

        it('should initialize with the correct value', function () {
            const expected = 100;
            const actual = paymentPackage.value;

            expect(expected).to.equal(actual);
        });
    });

    describe('name', function () {

        it('setter should throw error when the value is empty string or the value is not a string', function () {

            expect(() => {
                paymentPackage.name = '';
            }).to.throw();

            expect(() => {
                paymentPackage.name = 5;
            }).to.throw();
        });

        it('setter should work correctly with valid data', function () {
            paymentPackage.name = 'Partnership Fee';

            const expected = 'Partnership Fee';
            const actual = paymentPackage.name;

            expect(expected).to.equal(actual);
        });
    });

    describe('value', function () {

        it('setter should throw error when the value is string or the value is less then 0', function () {

            expect(() => {
                paymentPackage.value = 'not a number';
            }).to.throw();

            expect(() => {
                paymentPackage.value = -6;
            }).to.throw();
        });

        it('setter should work correctly with valid data', function () {
            paymentPackage.value = 300;

            const expected = 300;
            const actual = paymentPackage.value;

            expect(expected).to.equal(actual);
        });

        it('should work correctly when the value is equal to 0', function () {
            paymentPackage.value = 0;

            const expected = 0;
            const actual = paymentPackage.value;

            expect(expected).to.equal(actual);
        });
    });

    describe('VAT', function () {

        it('setter should throw error when the value is string or the value is less then 0', function () {

            expect(() => {
                paymentPackage.VAT = 'not a number';
            }).to.throw();

            expect(() => {
                paymentPackage.VAT = -6;
            }).to.throw();
        });

        it('setter should work correctly with valid data', function () {
            paymentPackage.VAT = 300;

            const expected = 300;
            const actual = paymentPackage.VAT;

            expect(expected).to.equal(actual);
        });
    });

    describe('active', function () {

        it('setter should throw error when the value is not boolean', function () {
          
            expect(() => {
                paymentPackage.active = 'not a boolean';
            }).to.throw();

        });

       
    });

    describe('toString tests', function () {
        it('should return correct string when the status is active', function () {
            const expected = 'Package: Consultation\n' +
                '- Value (excl. VAT): 100\n' +
                '- Value (VAT 20%): 120';

            const actual = paymentPackage.toString();

            expect(expected).to.equal(actual);            
        });

        it('should return correct string when the status is inactive', function () {
            paymentPackage.active = false;

            const expected = 'Package: Consultation (inactive)\n' +
                '- Value (excl. VAT): 100\n' +
                '- Value (VAT 20%): 120';

            const actual = paymentPackage.toString();

            expect(expected).to.equal(actual)
        });
    });
});