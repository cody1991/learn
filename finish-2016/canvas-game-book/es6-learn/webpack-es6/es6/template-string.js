var templateString = function() {
    function authroize(user, action) {
        console.log(`${user.name} , ${action} .`);
    }

    let user = {
        name: 'cody'
    }

    authroize(user, '敲代码');

    // 模板占位符中的代码可以是任意JavaScript表达式，所以函数调用、算数运算等这些都可以作为占位符使用，你甚至可以在一个模板字符串中嵌套另一个，我称之为模板套构（template inception）。
    // 如果这两个值都不是字符串，可以按照常规将其转换为字符串。例如：如果action是一个对象，将会调用它的.toString()方法将其转换为字符串值。
    // 如果你需要在模板字符串中书写反撇号，你必须使用反斜杠将其转义：`\``等价于"`"。
    // 同样地，如果你需要在模板字符串中引入字符$和{。无论你要实现什么样的目标，你都需要用反斜杠转义每一个字符：`\$`和`\{`。

    let message = SaferHTML `<p>${user.name} 向你示好</p>`;
    console.log(message);

    function SaferHTML(templateData) {
        var s = templateData[0];

        for (let i = 1; i < arguments.length; i++) {
            let arg = String(arguments[i]);

            s += arg.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");

            s += templateData[i];
        }
        return s;
    }

    // let c = ``
    // alert(`Hello world!`)
    // ``;
}

export default templateString;
