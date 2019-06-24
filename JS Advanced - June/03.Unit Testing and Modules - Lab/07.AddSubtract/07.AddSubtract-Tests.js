const expect = require('chai').expect;
const createCalculator = require('./07.AddSubtract').createCalculator;

describe("createCalculator", function () {
    
    let calculator;
    beforeEach(function () {
        calculator = createCalculator();
    });

    it("should return 0 for get;", function () {        
        expect(calculator.get()).to.be.equal(0);
    });

    it("should return 8 after add(2); add(6);", function () {
        calculator.add(2);
        calculator.add(6);       
        expect(calculator.get()).to.be.equal(8);
    });
    it("shoul return -8 after subtract(6); subtract(2)", function () {
        calculator.subtract(6);
        calculator.subtract(2);
        let value = calculator.get();
        expect(value).to.be.equal(-8);
    });
    it("should return 6.2 after add(6.3); subtract(1.1);", function () {
        calculator.add(7.3);        
        calculator.subtract(1.1);
        expect(calculator.get()).to.be.equal(7.3 - 1.1);
    });
    it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", function () {
        calculator.add(10);
        calculator.subtract('7');
        calculator.add('-2');
        calculator.subtract(-1);
        let value = calculator.get();
        expect(value).to.be.equal(2);
    });
    it("should return NaN for add(string)", function () {
        calculator.add('hello');
        let value = calculator.get();
        expect(value).to.be.NaN;
    });
    it("should return NanN for subtarct(string)", function () {
        calculator.subtract('hello');
        let value = calculator.get();
        expect(value).to.be.NaN;
    });
});