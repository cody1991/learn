from PIL import Image,ImageFilter,ImageDraw,ImageFont

im = Image.open('bg5.jpg')

w,h = im.size

print('Original image size : %sx%s' % (w,h))

im.thumbnail((w//2,h//2))
print('Resize image to : %sx%s' % (w//2,h//2))

im.save('thumbnail.jpg','jpeg')

im = Image.open('bg5.jpg')

im2 = im.filter(ImageFilter.BLUR)
im2.save('blur.jpg','jpeg')

import random

def rndChar():
    return chr(random.randint(65,90))

def rndColor():
    return (random.randint(64,255),random.randint(64,255),random.randint(64,255))

def rndColor2():
    return (random.randint(32, 127), random.randint(32, 127), random.randint(32, 127))

width = 60 * 4
height = 60

image = Image.new('RGB',(width,height),(255,255,255))

font = ImageFont.truetype('arial.ttf',36)

draw = ImageDraw.Draw(image)

for x in range(width):
    for y in range(height):
        draw.point((x,y),fill=rndColor())

for t in range(4):
    draw.text((60 * t + 10,10),rndChar(),font=font,fill=rndColor2())

image.save('code.jpg','jpeg')

# https://pillow.readthedocs.org/