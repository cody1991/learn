const obj = {
    hello: 'world',
    foo() {
        const bar = () => this.hello;
        return bar;
    }
}

console.log(obj.foo()());
