require.config({
    baseUrl: 'js/app',
    paths: {
        lib: '../lib'
    },
    // shim: {
    //     'depBase': ['lib/jquery-2.1.4']
    // },
    map: {
        'c': {
            'jquery': 'lib/jquery-1.11.3'
        },
        'd': {
            'jquery': 'lib/jquery-2.1.4'
        }
    },
    config: {
        'e': {
            size: 'large'
        },
        'f': {
            color: 'blue'
        }
    }
});

require(['b'], function(b) {
    console.log(b.add(2, 2));
});

require(['a'], function(a) {
    console.log(a);
});

require(['global', 'depBase'], function(global, base) {
    console.log(base);
});

require(['c'], function(jq) {

});

require(['d'], function(jq) {

});

require(['e'], function(e) {
    console.log(e);
});

require(['f'], function(f) {
    console.log(f);
});

require(['g'], function() {}, function(err) {
    // 报错
    // alert(err);
    var failedId = err.requireModules && err.requireModules[0];
    if (failedId === 'g') {
        console.log(failedId)
        requirejs.undef(failedId);
    }
});
