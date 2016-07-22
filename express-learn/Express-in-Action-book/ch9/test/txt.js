var app = require('../txt');
var supertest = require('supertest');
var cheerio = require('cheerio');

describe('plain text response', function() {
    var request;
    beforeEach(function() {
        request = supertest(app)
            .get('/')
            .set('User-Agent', 'my cool browser');
    });

    it('returns an HTML response', function(done) {
        request
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200)
            .end(done);
    });

    it('returns your User Agent', function(done) {
        request
            .set('Accept', 'text/html')
            .expect(function(res) {
                var htmlResponse = res.text;
                var $ = cheerio.load(htmlResponse);
                var userAgent = $('.user-agent').html().trim();
                console.log('------------------------------------------------------------------' + userAgent)
                if (userAgent !== 'my cool browser') {
                    throw new Error('User Agent not found');
                }
            })
            .end(done);
    })

    it('returns a plain text response', function(done) {
        request
            .set('Accept', 'text/plain')
            .expect('Content-Type', /text\/plain/)
            .expect(200)
            .end(done);
    });

    it('returns your User Agent', function(done) {
        request
            .set('Accept', 'text/plain')
            .expect(function(res) {
                if (res.text !== 'my cool browser') {
                    throw new Error('Response does not contain User Agent');
                }
            })
            .end(done);
    });
});
