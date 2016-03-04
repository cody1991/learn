# try:
#     f = open('/path/to/file', 'r')
#     print(f.read())
# finally:
#     if f:
#         f.close()

with open('./test.txt','r') as f:
    print(f.read())

# f = open('./bg1.jpg','rb')
# print(f.read());


# f = open('./test.txt','w')
# f.write('Hello,world!')
# f.close()

with open('./test.txt','w') as f:
    f.write('hello world')