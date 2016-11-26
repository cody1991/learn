var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        msg: {
            text: "hello"
        }
    },
    components: {
        'my-component': {
            template: '<div>A custome component!{{message}}</div>',
            data: function() {
                return {
                    message: 'my component'
                }
            }
        },
        'simple-counter': {
            template: '<button @click="counter+=1">{{counter}}</button>',
            data: function() {
                return {
                    counter: 0
                }
            }
        },
        'child': {
            template: "<span>{{message}}</span>",
            props: ['message']
        },
        'my-component-2': {
            template: '<input v-model="message.text">',
            props: ['parentMessage'],
            data: function() {
                return {
                    // 不修改父元素的
                    // message: this.parentMessage
                    // fix
                    message: JSON.parse(JSON.stringify(this.parentMessage))
                }
            }
        }
    }
});


Vue.component('example', {
    props: {
        // basic type check (`null` means accept any type)
        propA: Number,
        // multiple possible types
        propB: [String, Number],
        // a required string
        propC: {
            type: String,
            required: true
        },
        // a number with default value
        propD: {
            type: Number,
            default: 100
        },
        // object/array defaults should be returned from a
        // factory function
        propE: {
            type: Object,
            default: function() {
                return {
                    message: 'hello'
                }
            }
        },
        // custom validator function
        propF: {
            validator: function(value) {
                return value > 10
            }
        }
    }
});

// The type can be one of the following native constructors:

// String
// Number
// Boolean
// Function
// Object
// Array
// In addition, type can also be a custom constructor function and the assertion will be made with an instanceof check.

// When a prop validation fails, Vue will refuse to set the value on the child component and throw a warning if using the development build.
