const expect = require("chai").expect;
const lookupChar = require('./03.CharLookup').lookupChar;

describe('lookupChar', function () {

    it('should return undefined with a non-string first parameter', function(){
        const expected = lookupChar(13, 0);
        expect(expected).to.equal(undefined, 'The function did not return the correct result!')
    });

    it('should return undefined with a non-number second parameter', function(){
        const expected = lookupChar('Petar', 'Georgi');
        expect(expected).to.equal(undefined, 'The function did not return the correct result!')
    });

    it('should return undefined with a floating-point numbers as a second parameter', function(){
        const expected = lookupChar('Petar', 13.5);
        expect(expected).to.equal(undefined, 'The function did not return the correct result!')
    });

    it('should return undefined with an incorrect index value', function(){
        
        expect(lookupChar('Petar', 13)).to.equal('Incorrect index', 'The function did not return the correct result!')
        expect(lookupChar('Petar', -1)).to.equal('Incorrect index', 'The function did not return the correct result!')
        expect(lookupChar('Petar', 5)).to.equal('Incorrect index', 'The function did not return the correct result!')
    });

    it('should return currect value with currect parameter', function(){
        
        expect(lookupChar('Petar', 0)).to.equal('P', 'The function did not return the correct result!')
        expect(lookupChar('Petar', 4)).to.equal('r', 'The function did not return the correct result!')
    });
});