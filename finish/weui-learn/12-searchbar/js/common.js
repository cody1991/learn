(function() {
    var $searchInput = $('#search_input'),
        $weuiSearchBar = $('#search_bar'),
        $searchText = $('#search_text'),
        $searchShow = $('#search_show'),
        $searchCancel = $('#search_cancel'),
        $searchClear = $('#search_clear');

    $searchInput.on('focus', function() {
        $weuiSearchBar.addClass('weui_search_focusing');
    }).on('blur', function() {
        $weuiSearchBar.removeClass('weui_search_focusing');

        if ($(this).val()) {
            $searchText.hide();
        } else {
            $searchText.show();
        }
    }).on('input', function() {
        if ($(this).val()) {
            $searchShow.show();
        } else {
            $searchShow.hide();
        }
    });

    $searchCancel.on('touchend', function() {
        $searchShow.hide();
        $searchInput.val('');
    });

    $searchCancel.on('touchend', function() {
        $searchShow.hide();
        $searchInput.val('');
    });

    $searchClear.on('touchend', function() {
        $searchShow.hide();
        $searchInput.val('');
    });
})();
