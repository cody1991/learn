[vue-js-tutorial](http://vegibit.com/vue-js-tutorial/#)

`event` can be any of the standard JavaScript events like onfocus, onblur, onchange, onselect, onmouseover, onclick, onload, onsubmit

The equivalent in Vue would be something like v-on:focus=”function”, v-on:blur=”function”, v-on:change=”function”, v-on:select=”function”, v-on:mouseover=”function”, v-on:click=”function”, v-on:load=”function”, v-on:submit=”function”.

---

A Vue.js filter is essentially a function that takes a value, processes it, and then returns the processed value. In the markup it is denoted by a single pipe (|) and can be followed by one or more arguments

There are many built in filters right in the Vue framework itself that cover many common use cases such as capitalize, uppercase, lowercase, currency, pluralize, json, key, filterBy, and orderBy. The following example will show a basic use case for filterBy and orderBy.