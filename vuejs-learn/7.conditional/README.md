##v-if

在字符串模板中，如 Handlebars，我们得像这样写一个条件块：

    <!-- Handlebars 模板 -->
    {{#if ok}}
      <h1>Yes</h1>
    {{/if}}

在 Vue.js，我们使用 v-if 指令实现同样的功能：

    <h1 v-if="ok">Yes</h1>

也可以用 v-else 添加一个 “else” 块：

    <h1 v-if="ok">Yes</h1>
    <h1 v-else>No</h1>