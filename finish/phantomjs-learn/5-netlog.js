var page = require('webpage').create(),
    system = require('system'),
    address;

if (system.args.length === 1) {
    console.log('Usage: netlog.js <some URL>');
    phantom.exit(1);
} else {
    address = system.args[1];
    page.onResourceRequested = function(req) {
        console.log(JSON.parse(JSON.stringify(req, undefined, 4)).url);
    }
    page.open(address, function(status) {
        if (status != 'success') {
            console.log('Fail to load the address');
        }
        window.setTimeout(function() {
            phantom.exit(1);
        }, 5000);
    })
}
