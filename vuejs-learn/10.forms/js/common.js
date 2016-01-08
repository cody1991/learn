var vm = new Vue({
    el: '#message',
    data: {
        message: '',
        checked: false,
        checkedNames: [],
        picked: '',
        selected: null,
        selectedList: [],
        selected2: 'A',
        options: [{
            text: 'one',
            value: 'A'
        }, {
            text: 'two',
            value: 'B'
        }, {
            text: 'three',
            value: 'C'
        }],
        picked2: '',
        toggle: 'cody',
        a: 'cody',
        b: 'bear'
    }
});
