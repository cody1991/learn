from enum import Enum

# 为这样的枚举类型定义一个class类型，然后，每个常量都是class的一个唯一实例。Python提供了Enum类来实现这个功能：

Month = Enum('Month', ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))

for name,member in Month.__members__.items():
    print(name,'=>',member,',',member.value)

# value属性则是自动赋给成员的int常量，默认从1开始计数。

from enum import Enum,unique


# 需要更精确地控制枚举类型，可以从Enum派生出自定义类：
@unique
class Weekday(Enum):
    Sun = 0 # Sun的value被设定为0
    Mon = 1
    Tue = 2
    Wed = 3
    Thu = 4
    Fri = 5
    Sat = 6

print(Weekday.Mon)
print(Weekday['Tue'])
print(Weekday.Tue.value)
print(Weekday(1))

for name,member in Weekday.__members__.items():
    print(name,'=>',member)