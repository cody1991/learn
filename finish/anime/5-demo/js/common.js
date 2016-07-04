(function() {
    var play = document.querySelector('.play'),
        pause = document.querySelector('.pause'),
        restart = document.querySelector('.restart'),
        progress = document.querySelector('.progress');

    var myAnimation = anime({
        targets: '.container div',
        translateX: function() {
            return anime.random(10, 20) + 'rem';
        },
        scale: function() {
            return anime.random(10, 20) / 10;
        },
        rotate: function() {
            return anime.random(-360, 360);
        },
        duration: function() {
            return anime.random(800, 1400);
        },
        loop: true,
        easing: 'easeOutQuad',
        update: function(animation) {
            progress.value = animation.progress;
        }
    });

    play.addEventListener('click', function() {
        myAnimation.play();
    });

    pause.addEventListener('click', function() {
        myAnimation.pause();
    });

    restart.addEventListener('click', function() {
        myAnimation.restart();
    });

    progress.addEventListener('input', function() {
        myAnimation.seek(progress.value);
    });
})();

// ???
// anime({
//   targets: 'path',
//   strokeDashoffset: function(el) {
//     var pathLength = el.getTotalLength();
//     return [pathLength, 0]; // Will use the exact path length for each targeted path elements
//   }
// });
