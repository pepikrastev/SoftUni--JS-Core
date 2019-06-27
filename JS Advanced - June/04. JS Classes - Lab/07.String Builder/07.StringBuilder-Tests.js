const StringBuilder = require('./07.StringBuilder').StringBuilder;

const expect = require('chai').expect;

describe('StringBuilder', function () {
    let stringBuilder;

    beforeEach(function () {
        stringBuilder = new StringBuilder();
    });

    it('should have the correct function properties', function () {
        expect(StringBuilder.prototype.hasOwnProperty('constructor')).to.be.true;
        expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.true;
        expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.true;
        expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.true;
        expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.true;
        expect(StringBuilder.prototype.hasOwnProperty('toString')).to.be.true;
        expect(StringBuilder.hasOwnProperty('_vrfyParam')).to.be.true;
    });

   
    describe('constructor', function () {
        it('should work correctly without passed parameter', function () {
            const expected = '';
            const actual = stringBuilder.toString();

            expect(expected).to.equal(actual);
        });

        it('should work correctly with passed string parameter', function () {
            stringBuilder = new StringBuilder('123');

            const expected = '123';
            const actual = stringBuilder._stringArray.join('');

            expect(expected).to.equal(actual);
        });

        it('should throw error when different type from string is passed', function () {
            expect(() => {
                new StringBuilder([]);
            }).to.throw();
        });

        it('should work correctly with passed undefined parameter', function () {
            stringBuilder = new StringBuilder(undefined);

            const expected = 0;
            const actual = stringBuilder._stringArray.length;

            expect(expected).to.equal(actual);
        });
    });

    describe('append', function () {
        it('should throw error when different type from string is passed', function () {
            expect(() => {
                stringBuilder.append({})
            }).to.throw();
        });

        it('should work correctly with passed string parameter', function () {
            stringBuilder.append('123');

            const expected = '123';
            const actual = stringBuilder.toString();

            expect(expected).to.equal(actual);
        });

        it('should work correctly when the function is called multiple times', function () {
            stringBuilder.append('123');
            stringBuilder.append('456');
            stringBuilder.append('789');

            const expected = '123456789';
            const actual = stringBuilder.toString();

            expect(expected).to.equal(actual);
        });
    });

    describe('prepend', function () {
        it('should throw error when different type from string is passed', function () {
            expect(() => {
                stringBuilder.prepend({}).to.throw()
            })
        });

        it('should work correctly with passed string parameter', function () {
            stringBuilder.prepend('123');

            const expected = '123';
            const actual = stringBuilder.toString();

            expect(expected).to.equal(actual);
        });

        it('should work correctly when the function is called multiple times', function () {
            stringBuilder.prepend('789');
            stringBuilder.prepend('456');
            stringBuilder.prepend('123');

            const expected = '123456789';
            const actual = stringBuilder.toString();

            expect(expected).to.equal(actual);
        });
    });

    describe('insertAt', function () {
        it('should throw error when different type from string is passed', function () {

            expect(function () {
                stringBuilder.insertAt({}, 2);
            }).to.throw();
        });

        it('should work correctly with passed string parameter', function () {
            stringBuilder.append('14');
            stringBuilder.insertAt('23', 1);

            const expected = '1234';
            const actual = stringBuilder.toString();

            expect(expected).to.equal(actual);
        });

        it('should work correctly when the function is called multiple times', function () {
            stringBuilder.append('15');
            stringBuilder.insertAt('4', 1);
            stringBuilder.insertAt('3', 1);
            stringBuilder.insertAt('2', 1);

            const expected = '12345';
            const actual = stringBuilder.toString();

            expect(expected).to.equal(actual);
        });

        it('should work correctly with negative index', function () {
            stringBuilder.append('14');
            stringBuilder.insertAt('23', -1);

            const expected = '1234';
            const actual = stringBuilder.toString();

            expect(expected).to.equal(actual);
        });
    });

    describe('remove', function () {
        
        it('should work correctly with valid indexes', function () {
            stringBuilder.append('12345');
            stringBuilder.remove(1, 2);

            const expected = '145';
            const actual = stringBuilder.toString();

            expect(expected).to.equal(actual);
        });

        it('should work correctly when the function is called multiple times', function () {
            stringBuilder.append('7890948049490');
            stringBuilder.remove(8, 4);
            stringBuilder.remove(4, 3);
            stringBuilder.remove(0, 3);

            const expected = '000';
            const actual = stringBuilder.toString();

            expect(expected).to.equal(actual);
        });
    });

    it('should work correctly when multiple functions are called', function () {
        stringBuilder.append('789');
        stringBuilder.prepend('123');
        stringBuilder.insertAt('456', 3);
        stringBuilder.remove(3, 3);

        const expected = '123789';
        const actual = stringBuilder.toString();

        expect(expected).to.equal(actual);
    });

});