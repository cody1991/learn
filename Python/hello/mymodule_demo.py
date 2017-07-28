import mymodule
import sys
mymodule.say_hi()
print('Version',mymodule.__version__)

from mymodule import say_hi,__version__

say_hi()
print('Version',__version__)

print(dir(sys))

print(dir(say_hi))

a = 5
print(dir(mymodule))
print(dir())
