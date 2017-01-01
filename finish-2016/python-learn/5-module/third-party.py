from PIL import Image

im = Image.open('bg1.jpg')

print(im.format,im.size,im.mode)

im.thumbnail((320,200))

im.save('thumb.jpg','JPEG')

import sys
print(sys.path)