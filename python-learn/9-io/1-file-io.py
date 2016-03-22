# f = open('test.txt','r')

# print(f)

# print(f.read())

# f.close()

with open('./test.txt','r') as f:
    # print(f.read());
    for line in f.readlines():
        print(line.strip())

f = open('./bg1.jpg','rb')
# print(f.read())

f = open('./test.txt','r',encoding='gbk')
print(f.read())



f = open('./test.txt','w')
f.write('Hello, world!')
f.close()

with open('./test.txt','w') as f:
    f.write('Hello, world! 2')