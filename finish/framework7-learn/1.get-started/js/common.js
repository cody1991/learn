var app = new Framework7();

var $$ = Dom7;

var mainView = app.addView('.view-main', {
    // 想要动态的 navbar
    dynamicNavbar: true
});

// app.onPageInit('about', function(page) {

// });

$$(document).on('pageInit', function(e) {
    var page = e.detail.page;

    if (page.name === 'about') {
        app.alert('Here comes About page');
    }
});


// $$(document).on('pageInit', '.page[data-page="about"]', function(e) {
//     app.alert('Here comes About page');
// });
