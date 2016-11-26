var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        checked: true,
        checkedNames: [],
        picked: 'One',
        selected: 'A',
        selected2: ['A'],
        selected3: 'A',
        age: 0,
        options: [{
            text: 'One',
            value: 'A'
        }, {
            text: 'Two',
            value: 'B'
        }, {
            text: 'Three',
            value: 'C'
        }]
    },
});

// <input v-model="message">
// same as
// <input v-bind:value="message" v-on:input="message = $event.target.value">
