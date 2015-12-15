(function() {

    var template, data, html;
    var gotTemplate, gotData;

    function getProducts() {
        gotTemplate = false;
        gotData = false;
        $.get('./productListTemplate.mustache', null, function(ajaxData) {
            template = ajaxData;
            gotTemplate = true;
            if (gotData) {
                processTemplate();
            }
        });
        $.getJSON("./products.json", null, function(ajaxData) {
            data = ajaxData;
            gotData = true;
            if (gotTemplate) {
                processTemplate();
            }
        });

        function processTemplate() {
            html = Mustache.render(template, data);
            $('#productList').html(html);
        }
    }

    $('#getProductsBtn').on('click', function() {
        getProducts();
    });

})();
