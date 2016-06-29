var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

Template7.global = {
    android: isAndroid,
    ios: isIos
};

var $$ = Dom7;

if (isAndroid) {
    $$('head').append(
        '<link rel="stylesheet" href="../dist/css/framework7.material.min.css">' +
        '<link rel="stylesheet" href="../dist/css/framework7.material.colors.css">'
    );

    $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
    $$('.view .navbar').prependTo('.view .page');

} else {
    $$('head').append(
        '<link rel="stylesheet" href="../dist/css/framework7.ios.min.css">' +
        '<link rel="stylesheet" href="../dist/css/framework7.ios.colors.min.css">'
    )
}

var myApp = new Framework7({
    material: isAndroid ? true : false,
    template7Pages: true
});

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

$$(document).on('pageInit', function(e) {
    var page = e.detail.page;

    if (page.name === 'about') {
        myApp.alert('Here comes About page');
    }
});
