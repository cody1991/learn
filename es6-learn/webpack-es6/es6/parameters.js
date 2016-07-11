function parameters() {
    console.log('parameters demo ----------------------');

    function containsAll(haystack) {
        for (var i = 1; i < arguments.length; i++) {
            var needle = arguments[i];
            if (haystack.indexOf(needle) === -1) {
                return false;
            }
        }

        return true;
    }

    console.log(containsAll('banana', 'b', 'nan'));

    function containsAllES6(haystack, ...needles) {
        for (var needle of needles) {
            if (haystack.indexOf(needle) === -1) {
                return false;
            }
        }
        return true;
    }

    console.log(containsAllES6('banana', 'b', 'nan'));

    // 通常来说，函数调用者不需要传递所有可能存在的参数，没有被传递的参数可由感知到的默认参数进行填充。JavaScript有严格的默认参数格式，未被传值的参数默认为undefined。ES6引入了一种新方式，可以指定任意参数的默认值

    function animalSentence(animals2 = 'tigers', animals3 = 'bears') {
        return `Lions and ${animals2} and ${animals3}!`;
    }

    // 默认参数的定义形式为[param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]，对于每个参数而言，定义默认值时=后的部分是一个表达式，如果调用者没有传递相应参数，将使用该表达式的值作为参数默认值。相关示例如下：

    console.log(animalSentence());
    console.log(animalSentence('elephants'));
    console.log(animalSentence('elephants', 'whales'));

    function aimalSentenceFancy(animals2 = "trigers", animals3 = (animals2 == 'bears') ? 'sealions' : 'bears') {
        return `Lions and ${animals2} and ${animals3}!`;
    }

    console.log(aimalSentenceFancy('bears'));

    // 传递undefined值等效于不传值，所以animalSentence(undefined, "unicorns")将返回“Lions and tigers and unicorns! Oh my!”。

    // 没有默认值的参数隐式默认为undefined，所以

    // function myFunc(a=42, b) {...}

    // 是合法的，并且等效于

    // function myFunc(a=42, b=undefined) {...}

    // 现在我们已经看到了arguments对象可被不定参数和默认参数完美代替，移除arguments后通常会使代码更易于阅读。除了破坏可读性外，众所周知，针对arguments对象对JavaScript虚拟机进行的优化会导致一些让你头疼不已的问题。

    // 我们期待着不定参数和默认参数可以完全取代arguments，要实现这个目标，标准中增加了相应的限制：在使用不定参数或默认参数的函数中禁止使用arguments对象。曾经实现过arguments的引擎不会立即移除对它的支持，当然，现在更推荐使用不定参数和默认参数。

}

export default parameters;
