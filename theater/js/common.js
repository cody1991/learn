(function() {
    var theater = theaterJS();

    theater.on('type:start,erase:start', function() {
        var actor = theater.getCurrentActor();
        actor.$element.classList.add('is-typing');
    }).on('type:end,erase:end', function() {
        var actor = theater.getCurrentActor();
        actor.$element.classList.remove('is-typing');
    });

    theater.addActor('vader').addActor('luke');

    theater.addScene('vader:Luke...', 400)
        .addScene('luke:What?', 400)
        .addScene('vader:I am', 200, '.', 200, '.', 200, '.')
        .addScene('Your faher')
        .addScene(theater.replay)
})();
