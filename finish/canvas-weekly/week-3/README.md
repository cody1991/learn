## 角度旋转
    dx = mouse.x - object.x;
    dy = mouse.y - object.y;
    object.rotation = Math.atan2(dy,dx)*180/Math.PI

## 平滑运动
    value = center + Math.sin(angle)*range;
    angle += speed;

## 正圆运动
    x_position = centerX + Math.sin(angle)*radius;
    y_position = centerY + Math.cos(angle)*radius;
    angle += speed;

## 椭圆运动
    x_position = centerX + Math.cos(angle)*radiusX;
    y_position = centerY + Math.sin(angle)*radiusY;
    angle += speed;

##两点间距离
    dx = x2 - x1;
    dy = y2 - y1;
    dist = Math.sqrt(dx*dx + dy*dy);
