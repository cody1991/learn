断言库有很多种，Mocha并不限制使用哪一种。上面代码引入的断言库是chai，并且指定使用它的expect断言风格。
expect断言的优点是很接近自然语言，下面是一些例子。

- - -

相等或不相等

expect(4 + 5).to.be.equal(9);

expect(4 + 5).to.be.not.equal(10);

expect(foo).to.be.deep.equal({ bar: 'baz' });

- - -

布尔值为true

expect('everthing').to.be.ok;

expect(false).to.not.be.ok;

- - -

typeof

expect('test').to.be.a('string');

expect({ foo: 'bar' }).to.be.an('object');

expect(foo).to.be.an.instanceof(Foo);

- - -

include

expect([1,2,3]).to.include(2);

expect('foobar').to.contain('foo');

expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

- - -

empty

expect([]).to.be.empty;

expect('').to.be.empty;

expect({}).to.be.empty;

- - -

match

expect('foobar').to.match(/^foo/);