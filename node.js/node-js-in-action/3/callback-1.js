setTimeout(function() {
    console.log('I execute first');
    setTimeout(function() {
        console.log('I execute next');
        setTimeout(function() {
            console.log('I excute last.');
        }, 100);
    }, 500);
}, 1000);
