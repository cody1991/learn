var baseURL = 'https://jei165ad2mc.firebaseio-demo.com/';
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var Users = new Firebase(baseURL + 'users');

Users.on('child_added', function(snapshot) {
    var item = snapshot.val();

    item.id = snapshot.key();

    app.users.push(item);
});

Users.on('child_removed', function(snapshot) {
    var id = snapshot.key();
    app.users.some(function(user) {
        if (user.id === id) {
            app.users.$remove(user);
            return true;
        }
    })
});
var app = new Vue({
    el: '#app',
    data: {
        users: [],
        newUser: {
            name: '',
            email: ''
        }
    },
    computed: {
        validation: function() {
            return {
                name: !!this.newUser.name.trim(),
                email: emailRE.test(this.newUser.email)
            }
        },
        isValid: function() {
            var validation = this.validation;
            return Object.keys(validation).every(function(key) {
                return validation[key];
            });
        }
    },
    methods: {
        addUser: function() {
            if (this.isValid) {
                Users.push(this.newUser);
                this.newUser.name = '';
                this.newUser.email = '';
            }
        },
        removeUser: function(user) {
            new Firebase(baseURL + 'users/' + user.id).remove();
        }
    }
})
