# import logging
# logging.basicConfig(level=logging.INFO)

# s = '0'
# n = int(s)

# logging.info('n = %d' % n)
# print(10 / n)

# s = '0'
# n = int(s)
# print(10 / n)

import pdb

s = '0'
n = int(s)
pdb.set_trace() #运行到这里会自动暂停

# 程序会自动在pdb.set_trace()暂停并进入pdb调试环境，可以用命令p查看变量，或者用命令c继续运行
print(10 / n)
