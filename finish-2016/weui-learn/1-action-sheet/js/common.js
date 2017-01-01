(function() {
    var mask = $('#mask');
    var weuiActionsheet = $('#weui_actionsheet');
    var showActionSheet = $('#showActionSheet');
    var actionsheetCancel = $('#actionsheet_cancel');

    showActionSheet.on('click', function() {
        weuiActionsheet.addClass('weui_actionsheet_toggle');
        mask.show().focus().addClass('weui_fade_toggle').one('click', function() {
            hideActionSheet(weuiActionsheet, mask);
        });
        // //加focus是为了触发一次页面的重排(reflow or layout thrashing),使mask的transition动画得以正常触发

        actionsheetCancel.one('click', function() {
            hideActionSheet(weuiActionsheet, mask);
        });

        mask.unbind('transitionend').unbind('webkitTransitionEnd');

        function hideActionSheet(weuiActionsheet, mask) {
            weuiActionsheet.removeClass('weui_actionsheet_toggle');
            mask.removeClass('weui_fade_toggle');

            mask.on('transitionend', function() {
                mask.hide();
            }).on('webkitTranstionEnd', function() {
                mask.hide();
            });
        }
    });
})();
