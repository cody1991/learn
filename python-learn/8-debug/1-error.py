try:
    print('try...')
    # r = 10 / 0
    # r = 10 / int('a')
    r = 10 / 2
    print('result:',r)
except ValueError as e:
    print('ValueError:',e)
except ZeroDivisionError as e:
    print('ZeroDivisionError:',e)
else:
    print('no error!')
finally:
    print('finally...')

print('END')


# Python的错误其实也是class，所有的错误类型都继承自BaseException，所以在使用except时需要注意的是，它不但捕获该类型的错误，还把其子类也“一网打尽”。

try:
    # foo()
    pass
except ValueError as e:
    print('ValueError')
except UnicodeError as e:
    print('UnicodeError')

# 第二个except永远也捕获不到UnicodeError，因为UnicodeError是ValueError的子类，如果有，也被第一个except给捕获了。

# Python所有的错误都是从BaseException类派生的

def foo(s):
    return 10 / int(s)

def bar(s):
    return foo(s) * 2

def main():
    try:
        bar('0')
    except Exception as e:
        print('Error',e)
    finally:
        print('finally...')

main()

# def main():
#     bar('0')

# main()

import logging

def main():
    try:
        bar('0')
    except Exception as e:
        logging.exception(e)

main()

# 同样是出错，但程序打印完错误信息后会继续执行，并正常退出：

class FooError(ValueError):
    pass

def foo(s):
    n = int(s)
    if n == 0:
        raise FooError('invalid value: %s' % s)
    return 10 / n

foo('0')