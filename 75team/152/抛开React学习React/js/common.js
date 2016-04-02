(function() {
    var state = {
        items: [],
        id: 0
    };

    var $add = $('#add'),
        $input = $('#input'),
        $list = $('#list');

    $add.on('click', function(e) {
        var value = $input.val().trim();
        $input.val('');

        state.items.push({
            id: state.id++,
            text: value,
            completed: false
        });

        render();
    });

    $list.on('click', 'li', function() {
        var toggledId = parseInt($(this).attr('id'));

        state.items.forEach(function(el) {
            el.id === toggledId && (el.completed = !el.completed);
        });

        render();
    });

    function render() {
        var items = state.items.map(function(item) {
            var completed = item.completed ? 'completed' : '';

            return '<li class="item ' + completed + '" id="' + item.id + '">(' +
                item.id + ') ' + item.text + '</li>'
        }).join('');

        var html = '<ul>' + items + '</ul>';

        $list.html(html);
    };

    render();
})();
