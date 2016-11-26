(function(window) {
    function fn(str) {
        this.str = str;
    }

    fn.prototype.format = function() {
        var arg = Array.prototype.slice.call(arguments, 0);
        return this.str.replace(/\{\s*(\d+)\s*\}/g, function(a, b) {
            return arg[b] || '';
        });
    }

    window.fn = fn;
})(global);

(function() {
    var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');

    console.log(t.format('http://www.alibaba.com', 'Alibaba', 'welcome'));
})();
