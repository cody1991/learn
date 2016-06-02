var app = new Vue({
    el: '#app',
    data: {
        message: '',
        checked: false,
        checkedNames: [],
        picked: 'two',
        selected: '',
        selected2: '',
        selected3: '',
        a: 'toggleTrue',
        b: 'toggleFalse',
        toggle: 'toggleTrue',
        age: 0,
        msg: '',
        options: [{
            text: 'one',
            value: 'A'
        }, {
            text: 'two',
            value: 'B'
        }, {
            text: 'three',
            value: 'C'
        }]
    }
});
