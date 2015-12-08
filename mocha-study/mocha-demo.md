mocha命令后面紧跟测试脚本的路径和文件名，可以指定多个测试脚本。

Mocha默认运行test子目录里面的测试脚本。所以，一般都会把测试脚本放在test目录里面，然后执行mocha就不需要参数了

加上--recursive参数，这时test子目录下面所有的测试用例----不管在哪一层----都会执行。

- - -

    $ mocha spec/{my,awesome}.js

    $ mocha test/unit/*.js

上面的第一行命令，指定执行spec目录下面的my.js和awesome.js。第二行命令，指定执行test/unit目录下面的所有js文件。

除了使用Shell通配符，还可以使用Node通配符

    $ mocha 'test/**/*.@(js|jsx)'

上面代码指定运行test目录下面任何子目录中、文件后缀名为js或jsx的测试脚本。注意，Node的通配符要放在单引号之中，否则星号（*）会先被Shell解释。

上面这行Node通配符，如果改用Shell通配符，要写成下面这样。
    
    $ mocha test/{,**/}*.{js,jsx}

- - -

mocha --help -h

    mocha --reporter ,缩写是 -R

    可以查看能显示的格式，默认是spec

    dot - dot matrix
    doc - html documentation
    spec - hierarchical spec list
    json - single json object
    progress - progress bar
    list - spec-style listing
    tap - test-anything-protocol
    landing - unicode landing strip
    xunit - xunit reporter
    html-cov - HTML test coverage
    json-cov - JSON test coverage
    min - minimal reporter (great with --watch)
    json-stream - newline delimited json events
    markdown - markdown documentation (github flavour)
    nyan - nyan cat!

mocha --watch -w

    mocha --bail -b  

    --bail参数指定只要有一个测试用例没有通过，就停止执行后面的测试用例。这对持续集成很有用。

- - -
    
    mocha --grep -g

    --grep参数用于搜索测试用例的名称（即it块的第一个参数），然后只执行匹配的测试用例。