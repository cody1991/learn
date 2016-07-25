(function() {
    var $showToast = $('#showToast'),
        $showLoadingToast = $('#showLoadingToast'),
        $toast = $('#toast'),
        $loadingToast = $('#loadingToast');

    $showToast.on('click', function() {
        $toast.show();
        setTimeout(function() {
            $toast.hide();
        }, 2000);
    });

    $showLoadingToast.on('click', function() {
        $loadingToast.show();
        setTimeout(function() {
            $loadingToast.hide();
        }, 2000);
    });
})();
