const expect = require('chai').expect;
const isSymmetric = require('./05.CheckForSymmetr').isSymmetric;

describe('isSymmetric', function () {

    it('should return false when is not array', function(){
        expect(isSymmetric(12)).to.equal(false);
    });

    it('should return false when is not symmetric array', function(){
        expect(isSymmetric([1, 2, 3, 4])).to.equal(false);
    });

    it('should return true  when is symmetric array', function(){
        expect(isSymmetric([1, 2, 2, 1])).to.equal(true);
    });

    it('should return true when is empty array', function(){
        expect(isSymmetric([])).to.equal(true);
    });

    it('should return true when is diffrent elements in array are summetric', function(){
        expect(isSymmetric([1, 'Pesho', {name: 'Pesho'}, {name: 'Pesho'}, 'Pesho', 1] )).to.equal(true);
    });
});