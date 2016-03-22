import os

print(os.name)

# print(os.environ)
print(os.environ.get('PATH'))
print(os.environ.get('x','default'))


print(os.path.abspath('.'))

absPath = os.path.abspath('.')
fullPath = os.path.join(absPath,'testdir')

print(fullPath)

os.rmdir(fullPath)
os.mkdir(fullPath)

testTextPath = os.path.join(absPath,'test.txt')

print(os.path.split(testTextPath))
print(os.path.splitext(testTextPath))

# testText2Path = os.path.join(absPath,'test2.txt')
# os.rename(testText2Path,'test2.py')

# testText2Path = os.path.join(absPath,'test2.py')

# os.remove(testText2Path)


# 幸运的是shutil模块提供了copyfile()的函数，你还可以在shutil模块中找到很多实用函数，它们可以看做是os模块的补充。

all = [x for x in os.listdir('.') if os.path.isdir(x)]
print(all)

all2 = [x for x in os.listdir('.') if os.path.isfile(x) and os.path.splitext(x)[1]=='.py']
print(all2)

print([x for x in os.listdir('.')])