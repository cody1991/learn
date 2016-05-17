var Foo = Vue.extend({
    template: '<div class="foo">' +
        '<h2>This is Foo!</h2>' +
        '<router-view></router-view>' +
        "<hr/><p>当前路径：{{$route.path}}" +
        "<p>当前路由参数：{{$route.params | json}}</p>" +
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
                component: Bar,
                auth: true
            },
            '/baz': {
                component: Baz
            }
        }
    },
    '/user/:username/id/:id': {
        component: {
            template: '<p>用户名是{{$route.params.username}} id是{{$route.params.id}}'
        }
    }
});

// router.beforeEach(function(transition) {
//     if (transition.to.auth) {
//         console.log('auth is true');
//     }
// });


var App = Vue.extend({});
router.start(App, '#app');


// 动态片段只能匹配路径中的一个部分，而全匹配片段则基本类似于它的贪心版。例如 /foo/*bar 会匹配任何以 /foo/ 开头的路径。匹配的部分也会被解析为 $route.params 中的一个键值对。

// 例如:

// 模式  匹配的路径   $route.params
// /user/*any  /user/a/b/c { any: 'a/b/c' }
// /foo/*any/bar   /foo/a/b/bar    { any: 'a/b' }
