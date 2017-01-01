var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        firstName: 'Foo',
        lastName: 'Bar',
        // fullName: 'Foo Bar'
    },
    // watch: {
    //     firstName: function(val) {
    //         this.fullName = val + ' ' + this.lastName;
    //     },
    //     lastName: function(val) {
    //         this.fullName = this.firstName + ' ' + val;
    //     }
    // },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('');
        },
        // 默认是 getter
        // fullName: function() {
        //     return this.firstName + ' ' + this.lastName;
        // },
        fullName: {
            get: function() {
                return this.firstName + ' ' + this.lastName;
            },
            set: function(newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        }
    }
});


var app2 = new Vue({
    el: '#app2',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        question: function(newQuestion) {
            this.answer = 'Waiting for you to stop typing...';
            this.getAnswer();
        }
    },
    methods: {
        // _.debounce is a function provided by lodash to limit how
        // often a particularly expensive operation can be run.
        // In this case, we want to limit how often we access
        // yesno.wtf/api, waiting until the user has completely
        // finished typing before making the ajax request. To learn
        // more about the _.debounce function (and its cousin
        // _.throttle), visit: https://lodash.com/docs#debounce
        getAnswer: _.debounce(
            function() {
                var vm = this;
                if (this.question.indexOf('?') === -1) {
                    vm.answer = 'Questions usually contain a question mark.; -)';
                    return;
                }
                vm.answer = 'Thinking...';

                axios.get('http://yesno.wtf/api')
                    .then(function(response) {
                        vm.answer = _.capitalize(response.data.answer);
                    })
                    .catch(function(error) {
                        vm.answer = 'Error!Could not reach the API. ' + error;
                    })
            }, 500
        )
    }
});
