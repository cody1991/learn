var pattern1 = /at/g,
    pattern2 = /[bc]at/i,
    pattern3 = /.at/gi;

// /\[bc\]at/i
// /\.at/gi

// new RegExp('[bc]at','i')

for (i = 0; i < 10; i++) {
    re = /cat/g;
    console.log(re.test('catstrophe'));
}

for (i = 0; i < 10; i++) {
    re = new RegExp('cat', 'g');
    console.log(re.test('catstrophe'));
}

var re = new RegExp('cat', 'g');

console.log(re.global);
console.log(re.ignoreCase);
console.log(re.lastIndex);
console.log(re.multiline);
console.log(re.source);

// exec()

var text = "mon and dad and baby";
var patternText = /mon( and dad( and baby)?)?/gu;
var matchs = patternText.exec(text);
console.log(matchs.index);
console.log(matchs.input);
// 第一项是和整个模式匹配的字符串
console.log(matchs[0]);
// 第二项是第一个捕获组匹配的
console.log(matchs[1]);
console.log(matchs[2]);

var text = 'cat, bat, sat, fat';
var patternText = /.at/;

var matchs = patternText.exec(text);
console.log(matchs.index); // 0
console.log(matchs.input); //cat, bat, sat, fat
console.log(matchs[0]); // cat
console.log(matchs[1]);
console.log(matchs[2]);

// 没有 g ，执行多少次都是 0 ，对应 cat

patternText = /.at/g;

matchs = patternText.exec(text);
console.log(matchs.index); // 0
console.log(matchs.input); //cat, bat, sat, fat
console.log(matchs[0]); // cat


matchs = patternText.exec(text);
console.log(matchs.index); // 5
console.log(matchs.input); //cat, bat, sat, fat
console.log(matchs[0]); // bat


matchs = patternText.exec(text);
console.log(matchs.index); // 10
console.log(matchs.input); //cat, bat, sat, fat
console.log(matchs[0]); // sat

matchs = patternText.exec(text);
console.log(matchs.index); // 15
console.log(matchs.input); //cat, bat, sat, fat
console.log(matchs[0]); // fat

matchs = patternText.exec(text); // => null

// ----

text = '000-00-0000';
patternText = /\d{3}-\d{2}-\d{4}/;

console.log(patternText.test(text));

text = 'cat, bat, sat, fat';
patternText = /.at/;

matchs = text.match(patternText);

console.log('使用 match');
console.log(matchs.index);
console.log(matchs[0]);
console.log(patternText.lastIndex);

matchs = text.match(patternText);

var pos = text.search(/at/);

console.log(pos);

text = 'cat, bat, sat, fat';

result = text.replace('at', 'ond');

console.log(result);

result = text.replace(/at/g, 'ond');

console.log(result);

// replace第二个参数还可以是

// $$ => $

// $& => 匹配整个模式的字符串 RegExp.lastMatch

// $' => 匹配子字符串之前的子字符串 和 RegExp.leftContxt一样

// $` => 匹配子字符串之后的子字符串 和 RegExp.leftContxt一样

// $n 捕获的子字符串 0-9

// $nn 捕获的子字符串 01-99

result = text.replace(/(.at)/g, "word ($1)");
console.log(result);

function htmlEscape(text) {
    return text.replace(/[<>"&]/g, function(match, pos, originaText) {
        console.log(match);
        switch (match) {
            case "<":
                return "&lt;";
                break;
            case ">":
                return "&gt;";
                break;
            case "&":
                return "&amp;";
                break;
            case "\"":
                return "&quot;";
                break;
        }
    });
}

console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));

var colorText = 'red,blue,green,yellow';

console.log(colorText.split(','));
console.log(colorText.split(',', 2));
console.log(colorText.split(/[^,]+/)); // 非逗号作为分隔符

console.log(encodeURI('<script>'))
