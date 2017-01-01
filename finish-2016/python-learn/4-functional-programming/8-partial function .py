print(int('12345'))

print(int('12345',base=8))
print(int('12345',8))

def int2(x,base=2):
    return int(x,base)

print(int2('1000000'))

import functools
int2 = functools.partial(int,base=2)
print(int2('1000000'))
