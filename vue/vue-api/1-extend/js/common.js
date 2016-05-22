var Profile = Vue.extend({
    template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>'
});

var porfile = new Profile({
    data: {
        firstName: 'Walter',
        lastName: 'White',
        alias: 'Heisenberg'
    }
});

porfile.$mount('#mount-point');

porfile.firstName = 'Cody';

Vue.nextTick(function() {
    console.log('porfile firstName change');
});
