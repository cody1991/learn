var cheerio = require('cheerio');

// $ = cheerio.load('<h2 class="title">Hello world</h2>');

// $('h2.title').text('Hello there!');
// $('h2').addClass('welcome');

// console.log($.html());

$ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>');


console.log($('.apple','#fruits').text())
console.log($('ul .pear').attr('class'))
console.log($('li[class="orange"]').html())
console.log($('ul').attr('id'))
console.log($('.apple').attr('id','favorite').html())