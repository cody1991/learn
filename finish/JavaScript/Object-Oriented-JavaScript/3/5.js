var a = function() {
    function someSetup() {
        var setup = 'done';
    }

    function actualWork() {
        console.log('Worky worky');
    }

    someSetup();

    return actualWork();
}();
