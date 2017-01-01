// webpack：会在开发模式下开始一次性的建置
// webpack -p：会建置 production 的程式码
// webpack --watch：会监听程式码的修改，当储存时有异动时会更新档案
// webpack -d：加入 source maps 档案
// webpack --progress --colors：加上处理进度与颜色

import React from 'react';
import ReactDom from 'react-dom';
import Immutable from 'immutable';
import PurERenderMixin from 'react-addons-pure-render-mixin';

class FooComponent extends React.Component {
    constructor(props) {
        super(props);
        // 在 ES6 中可以使用官方文件上的 PureRenderMixin 進行比較，可以讓程式碼更簡潔：
        this.shouldComponentUpdate = PurERenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className={this.props.className}>foo</div>
        )
    }

}

ReactDom.render(<FooComponent className="cody"/>, document.getElementById('app'))

var map1 = Immutable.Map({
    a: 1,
    b: 3
});

var map2 = map1.set('a', 2);

console.log(map1.get('a')); // 自己是不变的
console.log(map2.get('a'));

// ImmutableJS 提供了 7 種不可修改的資料類型：List、Map、Stack、OrderedMap、Set、OrderedSet、Record。若是對 Immutable 物件操作都會回傳一個新值。其中比較常用的有 List、Map 和 Set：

// Map：類似於 key/value 的 object，在 ES6 也有原生 Map 對應

const Map = Immutable.Map;

const map3 = Map({ a: 1 });
// 1. Map 大小
console.log(map3.size);

// 2. 新增或取代 Map 元素
// set(key: K, value: V)
const map4 = map3.set('a', 7);
console.log(map3.get('a'), map4.get('a'));

// 3. 刪除元素
// delete(key: K)
const map5 = map3.delete('a');
console.log(map3.get('a'), map5.get('a'));

// 4. 清除 Map 內容
const map6 = map3.clear();
console.log(map6);

// 5. 更新 Map 元素
// update(updater: (value: Map<K, V>) => Map<K, V>)
// update(key: K, updater: (value: V) => V)
// update(key: K, notSetValue: V, updater: (value: V) => V)
const map7 = map3.update('a', () => (7));

console.log(map7.get('a'));

const map8 = Map({ b: 3 });

const map9 = map3.merge(map8);

console.log(map3, map9);

// List：有序且可以重複值，對應於一般的 Array

const List = Immutable.List;

const arr1 = List([1, 2, 3]);

// 1. 取得 List 長度
console.log(arr1.size);


// 2. 新增或取代 List 元素內容
// set(index: number, value: T)
// 將 index 位置的元素替換

const arr2 = arr1.set(-1, 7);
console.log(arr2.toString());

const arr3 = arr1.set(4, 0);
console.log(arr3.toString());

// 3. 刪除 List 元素
// delete(index: number)
// 刪除 index 位置的元素
const arr4 = arr1.delete(1);
console.log(arr4.toString());

// 4. 插入元素到 List
// insert(index: number, value: T)
// 在 index 位置插入 value
const arr5 = arr1.insert(1, 2);
console.log(arr5.toString());

const arr6 = arr1.clear();

console.log(arr6);

// Set：沒有順序且不能重複的列表

const Set = Immutable.Set;
// / 1. 建立 Set
const set1 = Set([1, 2, 3]);

// 2. 新增元素
// => Set { 1, 2, 3, 5 } 
// 由於 Set 為不能重複集合，故 1 只能出現一次
const set2 = set1.add(1).add(5);
console.log(set2.toString());

// 3. 刪除元素
const set3 = set1.delete(3);

// 4. 取聯集
const set4 = Set([2, 3, 4, 5, 6]);
console.log(set1.union(set4).toString());

// 5. 取交集
console.log(set1.intersect(set4).toString());

// 6. 取差集
console.log(set1.subtract(set4).toString());

// Structural Sharing 為了維持資料的不可變，又要避免像 deepCopy 一樣複製所有的節點資料而造成的資源損耗，在 ImmutableJS 使用的是 Structural Sharing 特性，亦即如果物件樹中一個節點發生變化的話，只會修改這個節點和和受它影響的父節點，其他節點則共享。

const obj = {
    count: 1,
    list: [1, 3]
}

var map10 = Immutable.fromJS(obj);
var map11 = map10.set('count', 4);

console.log(map10.list === map11.list);

var a = Immutable.Range(1, Infinity)
    .map(n => -n)
    .take(2)
    .reduce((r, n) => r + n, 0)

console.log(a);

// 豐富的 API 並提供快速轉換原生 JavaScript 的方式 在 ImmutableJS 中可以使用 fromJS()、toJS() 進行 JavaScript 和 ImmutableJS 之間的轉換。但由於在轉換之間會非常耗費資源，所以若是你決定引入 ImmutableJS 的話請盡量維持資料處在 Immutable 的狀態。

// 支持 Functional Programming Immutable 本身就是 Functional Programming（函數式程式設計）的概念，所以在 ImmutableJS 中可以使用許多 Functional Programming 的方法，例如：map、filter、groupBy、reduce、find、findIndex 等。

var someRecord = Immutable.Record({
    foo: null
});
var x = new someRecord({
    foo: 'app'
});
var y = x.set("foo", "azz");

console.log(x === y);

var z = x.set("foo", "app");

console.log(y.get("foo"));

console.log(z === x)
