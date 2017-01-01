var page = require('webpage').create(),
    system = require('system'),
    t, address;

if (system.args.length === 1) {
    console.log('Usage: loadsppeed.js <some URL>');
    phantom.exit();
}

t = Date.now();
address = system.args[1];

page.open(address, function(status) {
    if (status !== 'success') {
        console.log('Fail to load the address');
    } else {
        t = Date.now() - t;
        console.log('Loading time ' + t + 'msec');
    }
    phantom.exit();
})
