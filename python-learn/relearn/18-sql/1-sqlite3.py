import sqlite3

# 表是数据库中存放关系数据的集合，一个数据库里面通常都包含多个表，比如学生的表，班级的表，学校的表，等等。表和表之间通过外键关联。

# 要操作关系数据库，首先需要连接到数据库，一个数据库连接称为Connection；

# 连接到数据库后，需要打开游标，称之为Cursor，通过Cursor执行SQL语句，然后，获得执行结果。

# Python定义了一套操作数据库的API接口，任何数据库要连接到Python，只需要提供符合Python标准的数据库驱动即可。

# 由于SQLite的驱动内置在Python标准库中，所以我们可以直接来操作SQLite数据库。

conn = sqlite3.connect('test.db');

cursor = conn.cursor()

# cursor.execute('create table user(id varchar(20) primary key,name varchar(20))')

cursor.execute('insert into user(id,name) values(\'2\',\'Michael\')')


print(cursor.rowcount)

cursor.execute('select * from user where id=?','1')
values = cursor.fetchall()
print(values)


cursor.close()
conn.commit()
conn.close()