var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },
    methods: {
        addNewTodo: function() {
            this.todos.push(this.newTodoText);
            this.newTodoText = '';
        }
    },
    components: {
        'todo-item': {
            template: '<li>{{title}}<button @click="$emit(\'remove\')">X</button></li>',
            props: ['title']
        }
    }
});

// Suppose we have a component called my-component with the following template:

// <div>
//   <h2>I'm the child title</h2>
//   <slot>
//     This will only be displayed if there is no content
//     to be distributed.
//   </slot>
// </div>
// And a parent that uses the component:

// <div>
//   <h1>I'm the parent title</h1>
//   <my-component>
//     <p>This is some original content</p>
//     <p>This is some more original content</p>
//   </my-component>
// </div>
// The rendered result will be:

// <div>
//   <h1>I'm the parent title</h1>
//   <div>
//     <h2>I'm the child title</h2>
//     <p>This is some original content</p>
//     <p>This is some more original content</p>
//   </div>
// </div>


// For example, suppose we have an app-layout component with the following template:

// <div class="container">
//   <header>
//     <slot name="header"></slot>
//   </header>
//   <main>
//     <slot></slot>
//   </main>
//   <footer>
//     <slot name="footer"></slot>
//   </footer>
// </div>
// Parent markup:

// <app-layout>
//   <h1 slot="header">Here might be a page title</h1>

//   <p>A paragraph for the main content.</p>
//   <p>And another one.</p>

//   <p slot="footer">Here's some contact info</p>
// </app-layout>
// The rendered result will be:

// <div class="container">
//   <header>
//     <h1>Here might be a page title</h1>
//   </header>
//   <main>
//     <p>A paragraph for the main content.</p>
//     <p>And another one.</p>
//   </main>
//   <footer>
//     <p>Here's some contact info</p>
//   </footer>
// </div>


// new Vue({
//   el: 'body',
//   data: {
//     currentView: 'home'
//   },
//   components: {
//     home: { /* ... */ },
//     posts: { /* ... */ },
//     archive: { /* ... */ }
//   }
// })

// <component v-bind:is="currentView">
//   <!-- component changes when vm.currentview changes! -->
// </component>

// If you want to keep the switched-out components in memory so that you can preserve their state or avoid re-rendering, you can add a keep-alive param attribute:

// <component :is="currentView" keep-alive>
//   <!-- inactive components will be cached! -->
// </component>

// The transition-mode param attribute allows you to specify how the transition between two dynamic components should be executed.

// By default, the transitions for incoming and outgoing components happen simultaneously. This attribute allows you to configure two other modes:

// in-out: New component transitions in first, then current component transitions out after incoming transition has finished.

// out-in: Current component transitions out first, then new component transitions in after outgoing transition has finished.

// Here's a simple example:

// <component
//   v-bind:is="view"
//   transition="fade"
//   transition-mode="out-in">
// </component>

// .fade-enter-active, .fade-leave-active {
//   transition: opacity .3s ease;
// }
// .fade-enter, .fade-leave-active {
//   opacity: 0;
// }


// You can directly use v-for on a custom component, like any normal element:

// <my-component v-for="item in items"></my-component>
// However, this won't automatically pass any data to the component, because components have isolated scopes of their own. In order to pass the iterated data into the component, we should also use props:

// <my-component
//   v-for="(item, index) in items"
//   v-bind:item="item"
//   v-bind:index="index">
// </my-component>
