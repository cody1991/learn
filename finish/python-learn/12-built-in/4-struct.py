n = 10240099

b1 = (n & 0xff000000) >> 24
b2 = (n & 0xff0000) >> 16
b3 = (n & 0xff00) >> 8
b4 = n & 0xff

bs = bytes([b1,b2,b3,b4])
print(bs)

import struct

print(struct.pack('>I',10240099))