var proxiesAndReflect = function() {
    var obj = new Proxy({}, {
        get: function(target, key, receiver) {
            console.log(`getting ${key}!`);

            return Reflect.get(target, key, receiver);
        },
        set: function(target, key, value, receiver) {
            console.log(`setting ${key}!`);

            return Reflect.set(target, key, value, receiver);
        }
    });

    obj.count = 1;
    ++obj.count;

    // 显示结果可能与我们的理解不太一样，为什么会输出“setting count”和“getting count”？其实，我们拦截了这个对象的属性访问方法，然后将“.”运算符重载了。
};
export default proxiesAndReflect;
