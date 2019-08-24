let PizzUni = require('./02.PizzUni').PizzUni;
let expect = require('chai').expect;
let assert = require('chai').assert;

describe("PizzUni", function () {

    let myClass;
    beforeEach(function () {
        myClass = new PizzUni();
    });

    it("constructor should work correctly", function () {

        assert.deepEqual(myClass.registeredUsers, [])
        assert.deepEqual(myClass.orders, [])
        assert.deepEqual(myClass.availableProducts['pizzas'], ['Italian Style', 'Barbeque Classic', 'Classic Margherita']);
        assert.deepEqual(myClass.availableProducts['drinks'], ['Coca-Cola', 'Fanta', 'Water']);
    });


    it("registerUser should throw error if the given user exists", function () {

        myClass.registerUser('pepi@abv.bg');
        expect(() => myClass.registerUser('pepi@abv.bg')).to.throw(`This email address (pepi@abv.bg) is already being used!`)
    });

    it("registerUser should work correctly", function () {

        assert.deepEqual(myClass.registerUser('pepi@abv.bg'), { email: "pepi@abv.bg", orderHistory: [] });

    });

    it("makeAnOrder should throw error with wrong email", function () {

        expect(() => myClass.makeAnOrder('em@abv.bg', 'Italian Style')).to.throw('You must be registered to make orders!');
    });

    it("makeAnOrder should add return the index of currentOrder", function () {
        myClass.registerUser('em@abv.bg')
        expect(myClass.makeAnOrder('em@abv.bg', 'Italian Style')).to.equal(0);
    });

    it("makeAnOrder should throw error with no aveilable pizza", function () {

        myClass.registerUser('em@abv.bg')
        expect(() => myClass.makeAnOrder('em@abv.bg')).to.throw('You must order at least 1 Pizza to finish the order.');

        myClass.registerUser('pe@abv.bg')
        expect(() => myClass.makeAnOrder('pe@abv.bg', 'wrongPizza')).to.throw('You must order at least 1 Pizza to finish the order.');
    });

    it("makeAnOrder should work correctly with pizza and drink", function () {

        myClass.registerUser('pepi@abv.bg');
        myClass.makeAnOrder('pepi@abv.bg', 'Italian Style', 'Fanta');

        let actualOrder = myClass.orders[0].email;
        let actualdring = myClass.orders[0].orderedDrink;
        let actualPizza = myClass.orders[0].orderedPizza;
        let actualStatus = myClass.orders[0].status;

        expect(actualOrder).to.equal('pepi@abv.bg');
        expect(actualdring).to.equal('Fanta');
        expect(actualPizza).to.equal('Italian Style');
        expect(actualStatus).to.equal('pending');
    });

    it("detailsAboutMyOrder work correctly", function () {

        myClass.registerUser('pepi@abv.bg');
        myClass.makeAnOrder('pepi@abv.bg', 'Italian Style', 'Fanta');

        expect(myClass.detailsAboutMyOrder(0)).to.equal('Status of your order: pending');

        myClass.completeOrder();
        expect(myClass.detailsAboutMyOrder(0)).to.equal('Status of your order: completed');
    });

    it('detailsAboutMyOrder return undefined', function () {
        assert.isUndefined(myClass.detailsAboutMyOrder(-3));
    });


    it("doesTheUserExist work corrcetly", function () {

        myClass.registerUser('pepi@abv.bg');
        myClass.makeAnOrder('pepi@abv.bg', 'Italian Style', 'Fanta');

        expect(myClass.doesTheUserExist('pepi@abv.bg')).to.deep.equal({ email: "pepi@abv.bg", orderHistory: [{ orderedPizza: "Italian Style", orderedDrink: "Fanta" }] });


    });


    it("completeOrder works correctly", function () {

        myClass.registerUser('pepi@abv.bg');
        myClass.makeAnOrder('pepi@abv.bg', 'Italian Style');

        const expected = '{"orderedPizza":"Italian Style","email":"pepi@abv.bg","status":"completed"}';
        const actual = JSON.stringify(myClass.completeOrder());
        assert.equal(actual, expected);
    });


});
