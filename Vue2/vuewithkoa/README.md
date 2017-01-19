使用 sequelize-auto sequlize mysql

我们使用数据库创建了 `todolist` 数据库以及里面的两个表 `users` `lists` 

在 `server` 下执行

    sequelize-auto -o "./schema" -d todolist -h 127.0.0.1 -u root -p 3306 -x PASSWORD -e mysql

`schema` 下会生成两个文件 `users.js` `lists.js`

```
// lists.js

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lists', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'lists'
  });
};
```

```

// users.js

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users'
  });
};
```

自动化工具省去我们手动定义结构的时间，它们也使用了 `modules.exports` 方便我们引入

然后我们创建一个 `config/db.js` ，初始化 `Sequelize` 和数据库

```
const Sequelize = require('sequelize')

const TodoList = new Sequelize('mysql://root:cody1991@localhost/todolist', {
  define: {
    // 取消 sequelize 自动给数据库加入的时间戳 createdAt updatedAt
    timestamps: false
  }
})

module.exports = {
  TodoList
}
```

接下来我们创建 `models/users.js`

我们查询 `id` 是1的数据，可能使用下面的格式

```
const userInfo = Users.findOne({where:{id:1}})
```

但是行不通， `JavaScript` 的特性让它的 `IO` 操作是异步的。前面写法返回一个 `Promise` 对象，不是最终的 `userInfo`。想要用同步方法获取异步 `IO` 操作得到数据，通常是不能直接得到的。但是 `Koa` 里面 `co` 的存在，让这一切很简单

```
const db = require('../config/db.js')
const userModel = '../schema/users.js'

const TodoListDb = db.TodoList

// 用 sequelize 的 import 方法引入表结构，实例化了 Users
const Users = TodoListDb.import(userModel)

// 注意是 function* ，需要 yield 操作的函数都需要这种 generator 函数
const getUserById = function* (id) {
  const userInfo = yield Users.findOne({
    where: {
      id: id
    }
  })

  return userInfo
}

module.exports = {
  getUserById
}
```
接下来创建一个 `controllers/users.js`

```
const users = require('../models/users.js')

const getUserInfo = function* () {
  // 获取 url 里面传来的 id
  const id = this.params.id
  // 通过 yield 同步返回查询结果
  const result = yield users.getUserById(id)
  // 把请求结果放到 response 的 body 返回
  this.body = result
}

module.exports = {
  auth: (router) => {
    router.get('/user/:id', getUserInfo)
  }
}
```

还没定义路由，请求无效

创建 `routes/auth.js`

```
const users = require('../controllers/users.js')
const router = require('koa-router')()

// 使用 users 的 auth 方法 引入 router
users.auth(router)

module.exports = router
```

最后修改我们的 `app.js`

```
app.use(require('koa-bodyparser')())
app.use(json())
app.use(logger())

app.use(function* (next) {
  let start = new Date()
  yield next
  let ms = new Date() - start
  // 显示执行的时间
  console.log('%s %s - %s', this.method, this.url, ms)
})

app.on('error', function(err, ctx) {
  console.log('server error', err)
})

// 挂载到 koa-router 上，让所有的 auth 请求路径前面加上 '/auth' 路径
koa.use('/auth', auth.routes())

// 把路由规则挂载到 koa 上
app.use(koa.routes())


app.listen(8889, () => {
  console.log('Koa is listening in 8889')
})

module.exports = app
```
