const expect = require("chai").expect;
const isOddOrEven = require('./02.EvenOrOdd').isOddOrEven;

//Judge Submit Start//
describe('isOddOrEven', function () {
  
    it('should return undefined with number parameter', function () {
        let expected = isOddOrEven(13);
        expect(expected).to.equal(undefined, "Function did not return the correct result!")        
    });

    it('should return undefined with object parameter', function () {
        let expected =  isOddOrEven({name: "Pesho"});
        expect(expected).to.equal(undefined, "Function did not return the correct result!")        
    });

    it('should return currect result with an even length', function () {
        let expected =  isOddOrEven("roar");
        expect(expected).to.equal("even", "Function did not return the correct result!")        
    });

    it('should return currect result with an odd length', function () {
        let expected =  isOddOrEven("Peter");
        expect(expected).to.equal("odd", "Function did not return the correct result!")        
    });

    it('should return currect result with multiple consecutive checks', function () {
        
        expect(isOddOrEven("cat")).to.equal("odd", "Function did not return the correct result!")   
        expect(isOddOrEven("pet")).to.equal("odd", "Function did not return the correct result!")   
        expect(isOddOrEven("bird")).to.equal("even", "Function did not return the correct result!")        
    });
  
});
//Judge Submit End//