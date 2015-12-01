require.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    }
});

require(['app/b'], function(b) {
    console.log(b.add(2, 2));
});

require(['app/a'], function(a) {
    console.log(a);
});

