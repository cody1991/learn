(function() {
    var el = document.querySelectorAll('.hamburger');
    for (var i = 0; i < el.length; i++) {
        el[i].addEventListener('click', function() {
            this.classList.toggle('active');
        }, false);
    }
})();
