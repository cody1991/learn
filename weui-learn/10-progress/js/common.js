(function() {
    var $btnStartProgress = $('#btnStartProgress');

    $btnStartProgress.on('click', function() {
        var $progress = $('.js_progress');

        var progress = 0;

        function next() {
            $progress.css({
                width: progress + '%'
            });
            progress = ++progress % 100;

            setTimeout(next, 30);
        }

        next();
    });
})();
