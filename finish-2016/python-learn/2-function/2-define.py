from my_abs import my_abs
import math

def nop():
    pass

print(my_abs(-1))

# print(my_abs(1,2))
# TypeError: my_abs() takes 1 positional argument but 2 were given

# print(my_abs('A'))
# TypeError: unorderable types: str() >= int()

# abs('A')
# TypeError: bad operand type for abs(): 'str'


def move(x,y,step,angle=0):
    nx = x + step*math.cos(angle)
    ny = y - step*math.sin(angle)
    return nx,ny

r = move(100,100,60,math.pi / 6)

# 返回一个tuple
print(r)