import $ from 'jquery';

var example = function() {
    let fruits = [{
        id: 100,
        name: '草莓'
    }, {
        id: 101,
        name: '柚子'
    }, {
        id: 102,
        name: '李子'
    }];

    for (let fruit of fruits) {
        let message = `ID: ${fruit.id} Name: ${fruit.name}`;
        console.log(message);
    }

    console.log(`List total : ${fruits.length}`);

    function* hexRange(start, stop, step) {
        for (var i = start; i < stop; i += step) {
            yield i;
        }
    }

    function printColors() {
        var $content = $('#content');

        for (var hex of hexRange(900, 999, 10)) {
            var newDiv = $('<div>').attr('class', 'color').css({
                    'background-color': `#${hex}`
                })
                .append(`hex code: #${hex}`);

            $content.append(newDiv);
        }
    }

    printColors();
};
export default example;
