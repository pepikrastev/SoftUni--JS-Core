const expect = require('chai').expect;
const sum = require('./04.SumOfNumbers').sum;

describe('sum', function (){

    it('should works correctly', function(){
       const array = [1,2,3];
        const expected = sum(array);
        expect(expected).to.equal(6);
    });

    it('should return NaN when some elements are string', function(){

        expect(sum([1, 'pe', 3])).to.NaN;
        expect(sum(['pe'])).to.NaN;
    });

    it('should return zero when there is no elements in array', function(){

        expect(sum([])).to.equal(0);
    });
});
