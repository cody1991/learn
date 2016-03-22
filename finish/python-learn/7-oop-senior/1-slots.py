class Student(object):
    pass

def set_age(self,age): 
    self.age = age

s = Student()

s.name = 'Michael'

print(s.name)


from types import MethodType

s.set_age = MethodType(set_age,s)

s.set_age(25)

print(s.age)

s2 = Student()
# s2.set_age(25)

#转换成

def set_score(self,score):
    self.score = score

Student.set_score = MethodType(set_score,Student)

s.set_score(100)
s2.set_score(99)


# 如果我们想要限制实例的属性怎么办？比如，只允许对Student实例添加name和age属性。

# 为了达到限制的目的，Python允许在定义class的时候，定义一个特殊的__slots__变量，来限制该class实例能添加的属性：

class Student2(object):
    __slots__ = ('name','age')

s = Student2()

s.name = 'Michael'
s.age = 25

# AttributeError: 'Student' object has no attribute 'score'
# s.score = 99


# 由于'score'没有被放到__slots__中，所以不能绑定score属性，试图绑定score将得到AttributeError的错误。

# 使用__slots__要注意，__slots__定义的属性仅对当前类实例起作用，对继承的子类是不起作用的：

class GraduateStudent(Student2):
    # 除非在子类中也定义__slots__，这样，子类实例允许定义的属性就是自身的__slots__加上父类的__slots__。
    pass

g = GraduateStudent()
g.score = 999