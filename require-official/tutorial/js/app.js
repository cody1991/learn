require.config({
    baseUrl: 'js/app',
    paths: {
        lib: '../lib'
    },
    shim: {
        'depBase': ['lib/jquery']
    }
});

require(['b'], function(b) {
    console.log(b.add(2, 2));
});

require(['a'], function(a) {
    console.log(a);
});

require(['depBase'], function(base) {
    console.log(base);
})
