(function() {
    var $showDialog1 = $('#show-dialog-1');
    var $showDialog2 = $('#show-dialog-2');
    var $dialog1 = $('#dialog-1');
    var $dialog2 = $('#dialog-2');

    $showDialog1.on('click', function() {
        $dialog1.show().on('click', '.weui_btn_dialog', function() {
            $dialog1.off('click').hide();
        });
    });

    $showDialog2.on('click', function() {
        $dialog2.show().on('click', '.weui_btn_dialog', function() {
            $dialog2.off('click').hide();
        });
    });

})();
