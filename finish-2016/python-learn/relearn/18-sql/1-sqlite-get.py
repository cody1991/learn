import sqlite3

conn = sqlite3.connect('./test.db')

cursor = conn.cursor();
# cursor.execute('create table user (id varchar(20) primary key,name varchar(20))')
cursor.execute('select * from user where id=?','1')

values = cursor.fetchall()

# 使用Cursor对象执行insert，update，delete语句时，执行结果由rowcount返回影响的行数，就可以拿到执行结果。

# 使用Cursor对象执行select语句时，通过featchall()可以拿到结果集。结果集是一个list，每个元素都是一个tuple，对应一行记录。

print(values)

cursor.close()
conn.close()