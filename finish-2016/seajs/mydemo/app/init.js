define(function(require, exports, module) {
    var $ = require('lib/jquery');
    var data = require('data');
    var css = require( 'style');

    $('.author').html(data.author);
    $('.blog').find('a').attr('href',data.blog);
    console.log($('.blog').attr('href'))
});
