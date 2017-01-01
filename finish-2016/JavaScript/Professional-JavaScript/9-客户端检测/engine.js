var client = (function() {
    var engine = {
        ie: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,
        ver: null
    };
    var browser = {
        ie: 0,
        firefox: 0,
        safari: 0,
        konq: 0,
        opera: 0,
        chrome: 0,
        ver: null
    };
    var system = {
        win: false,
        mac: false,
        x11: false,
        iphone: false,
        ipod: false,
        ipad: false,
        ios: false,
        android: false,
        nokiaN: false,
        winMobile: false
    }
    return {
        engine: engine,
        browser: browser,
        system: system
    }
})();

engine = client.engine;
browser = client.browser;
system = client.system

var ua = navigator.userAgent;
var p = navigator.platform;

system.win = p.indexOf('Win') == 0;
system.mac = p.indexOf('Mac') == 0;
system.x11 = (p.indexOf('x11') == 0 || p.indexOf('Linux') == 0);

system.iphone = ua.indexOf('iPhone') > -1;
system.ipod = ua.indexOf('iPod') > -1;
system.ipad = ua.indexOf('iPad') > -1;
system.mac = ua.indexOf('Mac') > -1;

if (system.mac && ua.indexOf('Mobile' > -1)) {
    if (/CPU (?:iPhone )?0S (\d+_\d+)/.test(ua)) {
        system.ios = parseFloat(RegExp.$1.replace('_', '.'));
    } else {
        system.ios = 2;
    }
}

if (/Android (\d+.\d+)/.test(ua)) {
    system.android = parseFloat(RegExp.$1);
}

system.winMobile = (system.win == 'CE');

if (window.opera) {
    browser.ver = engine.ver = window.opera.version();
    browser.ver = engine.opera = parseFloat(engine.ver)
} else if (/AppleWebKit\/(\S+)/.test(ua)) {
    engine.ver = RegExp['$1'];
    engine.webkit = parseFloat(engine.ver);

    if (/Chrome\/(\S+)/.test(ua)) {
        browser.ver = RegExp['$1'];
        browser.chrome = parseFloat(browser.ver);
    } else if (/Version\/(\S+)/.test(ua)) {
        browser.ver = RegExp['$1'];
        browser.safari = parseFloat(browser.ver);
    } else {
        var safariVerison = 1;
        if (engine.webkit < 100) {
            safariVerison = 1;
        } else if (engine.webkit < 312) {
            safariVerison = 1.2;
        } else if (engine.webkit < 412) {
            safariVerison = 1.3;
        } else {
            safariVerison = 2;
        }
        browser.safari = browser.ver = safariVerison;
    }

} else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
    browser.ver = engine.ver = RegExp['$1'];
    browser.konq = engine.khtml = parseFloat(engine.ver);
} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
    engine.ver = RegExp['$1'];
    engine.gecko = parseFloat(engine.ver);

    if (/Firefox\/(\S+)/.test(ua)) {
        browser.ver = RegExp['$1'];
        browser.firefox = parseFloat(browser.ver);
    }

} else if (/MSIE ([^;]+)/.test(ua)) {
    browser.ver = engine.ver = RegExp['$1'];
    browser.ie = engine.ie = parseFloat(engine.ver);
}

console.log(client);
