# encoding=utf-8

f = open('io_file.txt','w')

f.write(u'''\
Programming is fun
When the work is done
if you wanna make your work also fun:
    use Python!
首先，我们使用内置的 open 函数并指定文件名以及我们所希望使用的打开模式来打开一个文件。打开模式可以是阅读模式（'r'），写入模式（'w'）和追加模式（'a'）。我们还可以选择是通过文本模式（'t'）还是二进制模式（'b'）来读取、写入或追加文本。

''')

f.close()

f = open('io_file.txt')

while True:
    line = f.readline()
    if len(line) == 0:
        break
    print(line,end='')

f.close()
