(function() {
    var $weuiNavbarItem = $('.weui_navbar_item'),
        $weuiTabbarItem = $('.weui_tabbar_item');

    $weuiNavbarItem.on('click', function() {
        var $this = $(this);

        $this.addClass('weui_bar_item_on').siblings('.weui_bar_item_on').removeClass('weui_bar_item_on');
    });

    $weuiTabbarItem.on('click', function() {
        var $this = $(this);

        $this.addClass('weui_bar_item_on').siblings('.weui_bar_item_on').removeClass('weui_bar_item_on');
    });
})();
