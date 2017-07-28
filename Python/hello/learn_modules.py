import sys

# 在这里要记住的是，运行的脚本名称在 sys.argv 的列表中总会位列第一。因此，在这一案例中我们将会有如下对应关系：'module_using_sys.py' 对应 sys.argv[0]，'we' 对应 sys.argv[1]，'are' 对应 sys.argv[2]，'arguments' 对应 sys.argv[3]。要注意到 Python 从 0 开始计数，而不是 1。

# python module_using_sys.py we are arguments
print('The command line arguments are:')
for i in sys.argv:
    print(i)

print('The pythonpath is' , sys.path)

import os
print(os.getcwd())

from math import sqrt
print('Square root of 6 is',sqrt(16))

if __name__ == '__main__':
    print('This program is being run by itself')
else:
    print('I am being imported from another module')
