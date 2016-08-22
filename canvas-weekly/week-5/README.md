//任意方向速度

	vx = speed * Math.cos(angle);
	vy = speed * Math.sin(angle);

//任意方向加速度

	ax = force * Math.cos(angle);
	ay = force * Math.xin(angle);

//改变速度

	vx += ax;
	vx += ay;

//改变位置

	object.x += vx;
	object.y += vy;