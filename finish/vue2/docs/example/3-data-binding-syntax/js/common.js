var app = new Vue({
    el: '#app',
    data: {
        message: 'hello Vue.js',
        rawHtml: "<h1>rawHtml</h1>"
    },
    filters: {
        // The filter function always receives the expression's value as the first argument.


        // Quoted arguments are interpreted as plain strings, while un-quoted ones will be evaluated as expressions. Here, the plain string 'arg1' will be passed into the filter as the second argument, and the value of expression arg2 will be evaluated and passed in as the third argument.
        capitalize: function(value) {
            if (!value && value !== 0) return '';
            value = value.toString();

            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
});

// v-bind:href='url'  :href='url'

// v-disabled='' :disabled=''

// v-on:click

// @click
