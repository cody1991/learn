var capitalize = require('../capitalize.js');

var chai = require('chai');
var expect = chai.expect;

describe('capitalize', function() {
    it('capitalizes single words', function() {
        expect(capitalize('express')).to.equal('Express');
        expect(capitalize('cats')).to.equal('Cats');
    });
    it('makes the rest of the string lowercase', function() {
        expect(capitalize('javaScript')).to.equal('Javascript');
    });
    it('leaves empty strings alone', function() {
        expect(capitalize('')).to.equal('');
    });
    it('leaves strings with no words alone', function() {
        expect(capitalize(" ")).to.equal(" ");
        expect(capitalize("123")).to.equal("123");
    });
    it('capitalizes multiple-word strings', function() {
        expect(capitalize('what is Express?')).to.equal('What is express?');
        expect(capitalize('i love lamp')).to.equal('I love lamp');
    });
    it('leaves already-capitalized words alone', function() {
        expect(capitalize('Express')).to.equal('Express');
    });
});
