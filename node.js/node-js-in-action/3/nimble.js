var flow = require('nimble'),
    exec = require('child_process').exec;

function downloadNodeVersion(version, destination, callback) {
    var url = 'http://nodejs.org/dist/node-v' + version + '.tar.gz';
    var filepath = destination + '/' + version + '.tgz';

    exec('curl ' + url + ' >' + filepath, callback);

    console.log(filepath);
}
flow.series([
    function(callback) {
        flow.parallel([
            function(callback) {
                console.log('Dowdinging Node v0.4.6...');
                downloadNodeVersion('0.4.6', './tmp', callback);
            },
            function(callback) {
                console.log('Dowdinging Node v0.4.7...');
                downloadNodeVersion('0.4.7', '/tmp', callback);
            }
        ], callback)
    },
    function(callback) {
        console.log('Creating archive of downloaded files...');
        exec('tar cvf node_distros.tar /tmp/0.4.6.tgz /tmp/0.4.7.tgz', function(error, stdout, stderr) {
            console.log('All done!');
            callback();
        })
    }
]);
