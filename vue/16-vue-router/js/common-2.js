var Foo = Vue.extend({
    template: '<div class="foo">' +
        '<h2>This is Foo!</h2>' +
        '<router-view></router-view>' +
        '</div>'
});

var Bar = Vue.extend({
    template: "<p>This is bar!</p>"
});

var Baz = Vue.extend({
    template: "<p>This is baz!</p>"
})

var router = new VueRouter();

router.map({
    '/foo': {
        component: Foo,
        subRoutes: {
            '/': {
                component: {
                    template: '<p>Default sub view for Foo</p>'
                }
            },
            '/bar': {
                component: Bar
            },
            '/baz': {
                component: Baz
            }
        }
    }
})

var App = Vue.extend({});
router.start(App, '#app');
