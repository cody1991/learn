import socket
s = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)

s.bind(('127.0.0.1',9999))

print('Bind UDP on 9999')

while True:
    data,addr = s.recvfrom(1024)
    print(data,addr)
    print('Recevide from %s:%s.' %addr)
    s.sendto(b'Hello,%s!' % data,addr)