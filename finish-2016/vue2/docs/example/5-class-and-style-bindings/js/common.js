var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        isActive: true,
        // hasError: false,
        error: null,
        // classObject: {
        //     active: true,
        //     "text-daner": false
        // }
        activeClass: 'active',
        errorClass: 'text-danger',
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    },
    computed: {
        classObject: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal',
            }
        }
    }
});
