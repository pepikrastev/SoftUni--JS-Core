const expect = require("chai").expect;
const mathEnforcer = require('./04.MathEnforcer').mathEnforcer;

describe('MathEnforcer', function () {

    describe('addFive', function () {

        it('should return currect result with non-number parameter', function () {
            let expected = mathEnforcer.addFive('Pesho');
            expect(expected).to.equal(undefined);
            
            expected = mathEnforcer.addFive({ name: 'Pesho' });
            expect(expected).to.equal(undefined);
        });

        it('should return currect result with number parameter', function () {
            let expected = mathEnforcer.addFive(10);
            expect(expected).to.equal(15);
            
            expected = mathEnforcer.addFive(-20);
            expect(expected).to.equal(-15);
           
            expected = mathEnforcer.addFive(13.5);
            expect(expected).to.be.closeTo(18.5, 0.01);
        });
    });

    describe('subtractTen', function () {

        it('should return currect result with non-number parameter', function () {
            const expected = mathEnforcer.subtractTen('Pesho');
            expect(expected).to.equal(undefined);
        });

        it('should return currect result with number parameter', function () {
            let expected = mathEnforcer.subtractTen(100);
            expect(expected).to.equal(90);

            expected = mathEnforcer.subtractTen(13.5);
            expect(expected).to.be.closeTo(3.5, 0.01);

            expected = mathEnforcer.subtractTen(-10);
            expect(expected).to.equal(-20);
        });
    });

    describe('sum', function () {

        it('should return currect result with non-number parameter', function () {
            let expected = mathEnforcer.sum('Pesho', 5);
            expect(expected).to.equal(undefined);

            expected = mathEnforcer.sum(5, 'Pesho');
            expect(expected).to.equal(undefined);
        });

        it('should return currect result with number parameter', function () {
            let expected = mathEnforcer.sum(100, 5);
            expect(expected).to.equal(105);

            expected = mathEnforcer.sum(13.5, 5.2);
            expect(expected).to.be.closeTo(18.7, 0.01);

            expected = mathEnforcer.sum(-7, -5);
            expect(expected).to.equal(-12);
        });
    });
});