class Student(object):

    @property
    def score(self):
        return self._score


    @score.setter
    def score(self,value):
        if not isinstance(value,int):
            raise ValueError('score must be an integer!')
        if value < 0 or value > 100:
            raise ValueError('score must between 0 ~ 100!')
        self._score = value

    @property
    def birth(self):
        return self._birth
    
    @birth.setter   
    def birth(self,value):
        self._birth = value

    @property
    def age(self):
        return 2015 - self._birth
    

s = Student()

s.score = 60
print(s.score)

# s.score = 9999
# s.set_score(9999)
# ValueError: score must between 0 ~ 100!

# 还记得装饰器（decorator）可以给函数动态加上功能吗？对于类的方法，装饰器一样起作用。Python内置的@property装饰器就是负责把一个方法变成属性调用的：


class Screen(object):
    @property
    def width(self):
        return self._width
    
    @property
    def height(self):
        return self._height
    
    @width.setter
    def width(self,value):
        self._width = value

    @height.setter
    def height(self,value):
        self._height = value

    @property
    def resolution(self):
        return self._width * self.height
    
s = Screen()
s.width = 1024
s.height = 768
print(s.resolution)