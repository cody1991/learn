var modules = function() {
    // import {flip as flipOmelet} from "eggs.js";
    // import {flip as flipHouse} from "real-estate.js";


    // 针对这种情况，你可以换用一种稍微不太一样的方法：不用花括号来导入模块。

    //     import _ from "lodash";
    // 这种简略的表达方法等价于import {default as _} from "lodash";。在ES6的模块中导入的CommonJS模块和AMD模块都有一个默认的导出，如果你用require()加载这些模块也会得到相同的结果——exports对象。

    // 很抱歉新特性有点儿多，但JavaScript不是唯一这样做的语言：出于某些原因，每一种语言中的模块系统都有这么一堆又独立又小，虽然无聊但是很方便的特性。不过还好，我们只剩一样东西没讲了。好吧，是两样。

    // import * as cows from "cows";
};
export default modules;
