(function() {
    var $showTooltips = $('#showTooltips'),
        $jsTooltips = $('.js_tooltips');

    $showTooltips.on('click', function() {
        $jsTooltips.show();
        setTimeout(function() {
            $jsTooltips.hide()
        }, 3000);
    })
})();
