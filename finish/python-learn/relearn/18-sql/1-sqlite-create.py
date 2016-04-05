# 要操作关系数据库，首先需要连接到数据库，一个数据库连接称为Connection；

# 连接到数据库后，需要打开游标，称之为Cursor，通过Cursor执行SQL语句，然后，获得执行结果。

# Python定义了一套操作数据库的API接口，任何数据库要连接到Python，只需要提供符合Python标准的数据库驱动即可。

# 由于SQLite的驱动内置在Python标准库中，所以我们可以直接来操作SQLite数据库。

import sqlite3

conn = sqlite3.connect('./test.db')

cursor = conn.cursor();
# cursor.execute('create table user (id varchar(20) primary key,name varchar(20))')
cursor.execute('insert into user (id,name) values (\'1\',\'Michael\')')

print(cursor.rowcount)

cursor.close()

conn.commit()

conn.close()