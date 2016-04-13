var Browser = require('zombie'),
    assert = require('chai').assert;

console.log(assert);

var browser;

suite('Cross-Page', function() {
    setup(function() {
        browser = new Browser();
    });

    test('requesting a group rate quote from the hood river tour page should populate the referrer field', function(done) {

        var referrer = 'http://localhost:3000/tours/hood-river';
        browser.visit(referrer, function() {
            browser.clickLink('.requestGroupRate', function() {
                console.log(browser.field('referrer'));
                assert(browser.field('referrer').value === '');
                done();
            });
        });
    });
});