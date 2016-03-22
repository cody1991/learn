
# 我们把变量从内存中变成可存储或传输的过程称之为序列化，在Python中叫pickling

# 把变量内容从序列化的对象重新读到内存里称之为反序列化，即unpickling

import pickle

d = dict(name='Bob',age=20,score=88)

# print(pickle.dumps(d))

# pickle.dumps()方法把任意对象序列化成一个bytes，然后，就可以把这个bytes写入文件。或者用另一个方法pickle.dump()直接把对象序列化后写入一个file-like Object：

f = open('dump.txt', 'wb')
pickle.dump(d,f)
f.close()
# print(d)

f = open('dump.txt','rb')
d = pickle.load(f)
f.close()

print(d)

# {} dict
# [] list
# 'string' str
# 1234.56 int or float
# true/false True/False
# null None

import json

print(json.dumps(d))

# dumps()方法返回一个str，内容就是标准的JSON。类似的，dump()方法可以直接把JSON写入一个file-like Object。

json_str =  '{"age": 20, "score": 88, "name": "Bob"}'
print(json.loads(json_str))


class Student(object):
    def __init__(self,name,age,score):
        self.name = name
        self.age = age
        self.score = score

def student2dict(std):
    return {
        'name':std.name,
        'age':std.age,
        'score':std.score
    }

s = Student('Bob',20,88)

print(s)
print(json.dumps(s,default=student2dict))

# https://docs.python.org/3/library/json.html#json.dumps

# 这些可选参数就是让我们来定制JSON序列化。前面的代码之所以无法把Student类实例序列化为JSON，是因为默认情况下，dumps()方法不知道如何将Student实例变为一个JSON的{}对象。

print(json.dumps(s,default=lambda obj:obj.__dict__))

def dict2student(d):
    return Student(d['name'],d['age'],d['score'])

json_str = '{"age": 20, "score": 88, "name": "Bob"}'
print(json.loads(json_str, object_hook=dict2student))