suite('"About" Page Tests', function() {
    test('page should countain link to contact page', function() {
        assert($('a[href="/contact"]').length);
    });
});
