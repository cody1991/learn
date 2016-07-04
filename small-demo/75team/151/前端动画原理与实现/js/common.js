(function() {
    var deg = 0;

    // block.addEventListener('click', function() {
    //     var self = this,
    //         startTime = new Date();
    //     setInterval(function() {
    //         var T = 1000;
    //         var p = (Date.now() - startTime) / T;
    //         console.log(p)

    //         self.style.transform = 'rotate(' + (360 * p) + 'deg)';
    //     }, 1);
    // });
    // block.addEventListener('click', function() {
    //     var self = this,
    //         startTime = new Date(),
    //         distance = 200,
    //         T = 2000;
    //     requestAnimationFrame(function step() {
    //         var p = Math.min(1.0, (new Date() - startTime) / T);
    //         console.log(p)

    //         self.style.transform = 'translateX(' + (distance * p) + 'px)';

    //         if(p < 1.0) requestAnimationFrame(step);
    //     }, 1);
    // });
    // block.addEventListener('click', function() {
    //     var self = this,
    //         startTime = new Date(),
    //         distance = 200,
    //         T = 2000;
    //     requestAnimationFrame(function step() {
    //         var p = Math.min(1.0, (new Date() - startTime) / T);
    //         console.log(p)

    //         self.style.transform = 'translateX(' + (distance * p * p) + 'px)';

    //         if(p < 1.0) requestAnimationFrame(step);
    //     }, 1);
    // });
    block.addEventListener('click', function() {
        var self = this,
            startTime = new Date(),
            distance = 200,
            T = 2000;
        requestAnimationFrame(function step() {
            var p = Math.min(1.0, (new Date() - startTime) / T);
            console.log(p)

            self.style.transform = 'translateX(' + (distance * p * (2 - p)) + 'px)';

            if (p < 1.0) requestAnimationFrame(step);
        }, 1);
    });
})();
