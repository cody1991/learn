class Student(object):
    # 类属性
    name = 'Student'

    # def __init__(self,name):
    #     self.name = name

s = Student()
print(s.name)
print(Student.name)

s.name = 'Michael'

print(s.name)
print(Student.name)

del s.name

print(s.name)
