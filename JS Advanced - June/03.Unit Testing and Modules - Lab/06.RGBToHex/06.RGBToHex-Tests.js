const expect = require('chai').expect;
const rgbToHexColor = require('./06.RGBToHex').rgbToHexColor;

describe('rgbToHexColor', function(){

    it('should return undefined when red is invalid', function(){

        expect(rgbToHexColor(-12, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor('Pesho', 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(298, 0, 0)).to.equal(undefined);
    });

    it('should return undefined when green is invalid', function(){

        expect(rgbToHexColor(0, -2, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 'Pesho', 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 298, 0)).to.equal(undefined);
    });

    it('should return undefined when blue is invalid', function(){

        expect(rgbToHexColor(0, 0, -2)).to.equal(undefined);
        expect(rgbToHexColor(0, 0, 'Pesho')).to.equal(undefined);
        expect(rgbToHexColor(0, 0, 298)).to.equal(undefined);
    });

    it('should return correct color', function(){

        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
});