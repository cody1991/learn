var getValue, setValue;
(function() {
    var secret = 0;

    getValue = function() {
        return secret;
    }

    setValue = function(v) {
        secret = v;
    }
})();
