// 1.移除一个超过边界的物体

    if(object.x - object.width/2 > right || object.x + object.width/2 < left || object.y - object.height/2 > bottom || object.y + object.height/2 < top){
            //移除物体代码
    }

// 2.重现一个超出边界的物体

    if(object.x - object.width/2 > right || object.x + object.width/2 < left || object.y - object.height/2 > bottom || object.y + object.height/2 < top){
            //重新设置对象的位置和速度
    }

//3. 边界环绕

    if(object.x - object.width/2 > right){
        object.x = left - object.width/2;
    }else if(object.x + object.width/2 < left){
        object.x = object.width/2 + right；
    }
    if(object.y - object.height/2 > bottom){
        object.y = top - object.height/2;
    }else if(object.y + object.height/2 < top){
        object.y = object.height/2 + bottom；
    }
      
//4.摩擦力(正规军)

    speed = Math.sqrt(vx*vx + vy*vy);
    angle = Math.atan2(vy, vx);
    if(speed > f){
        speed -= f;
    }else{
        speed = 0;
    }
    vx = Math.cos(angle)*speed;
    vy = Math.sin(angle)*speed;
       
//4.摩擦力(野战军)

    vx *= f;
    vy *= f;
