1、缓动动画

    var dx = targetX - object.x,
        dy = targetY - object.y;
    
    var vx = dx * easing,
        vy = dy * easing;
    
    object.x += vx;
    object.y += vy;

2、缓动动画，精简形式

    object.x += (targetX - object.x) * easing;
    object.y += (targetY - object.y) * easing;

3、弹性动画

    var ax = (targetX - object.x) * spring;
    var ay = (targetY - object.y) * spring;

    var vx += ax;
    var vy += ay;

    vx *= f;
    vy *= f;

    object.x += vx;
    object.y += vy;

4、弹性动画,精简形式

    vx += (targetX - object.x) * spring;
    vy += (targetY - object.y) * spring;

    object.x += (vx*=f);
    object.y += (vy*=f);

5、 Offset spring

    var dx = object.x - fixedX,
        dy = object.y - fixedY;
        angle = Math.atan2(dy, dx);
        targetX = fixed + Math.cos(angle)*springLength,
        targetY = fixed + Math.sin(angle)*springLength;
    
    //spring to targetX, targetY as above
