// step == 2 是有密码了

!(function() {
	window.lock = function(obj) {
		this.height = obj.height;
		this.width = obj.width;
		this.chooseType = Number(window.localStorage.getItem('chooseType')) || obj.chooseType;
	}

	lock.prototype.getPosition = function(e) {
		var rect = e.currentTarget.getBoundingClientRect();
		var po = {
			x: e.touches[0].clientX - rect.left,
			y: e.touches[0].clientY - rect.top
		};
		return po;
	}

	lock.prototype.bindEvent = function() {
		var self = this;
		this.canvas.addEventListener('touchstart', function(e) {
			e.preventDefault();

			var po = self.getPosition(e);

			console.log(po);
			console.log(self.arr)
			for (var i = 0; i < self.arr.length; i++) {
				if (Math.abs(po.x - self.arr[i].x) < self.r && Math.abs(po.y - self.arr[i].y) < self.r) {
					self.touchFlag = true;
					self.drawPoint(self.arr[i].x, self.arr[i].y);
					self.lastPoint.push(self.arr[i]);
					self.restPoint.splice(i, 1);

					console.log(self.arr[i]);
					console.log(self.lastPoint);
					console.log(self.restPoint);
					break;
				}
			}
		}, false);

		this.canvas.addEventListener('touchmove', function(e) {
			if (self.touchFlag) {
				self.update(self.getPosition(e));
			}
		});

		this.canvas.addEventListener('touchend', function(e) {
			if (self.touchFlag) {
				self.touchFlag = false;
				self.storePass(self.lastPoint);
				setTimeout(function() {
					self.reset();
				}, 300);
			}
		});

		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		});

		this.updatePasswordEle.addEventListener('click', function() {
			self.updatePassword();
		})
	}

	lock.prototype.updatePassword = function() {
		window.localStorage.removeItem('passwordxx');
		window.localStorage.removeItem('chooseType');

		this.pswObj = {};
		this.title.innerHTML = '绘制解锁图案';
		this.reset();
	}

	lock.prototype.reset = function() {
		this.makeState();
		this.createCircle();
	}

	lock.prototype.checkPass = function(psw1, psw2) {
		var p1 = '';
		var p2 = '';

		for (var i = 0; i < psw1.length; i++) {
			p1 += psw1[i].index + psw1[i].index;
		}
		for (var i = 0; i < psw2.length; i++) {
			p2 += psw2[i].index + psw2[i].index;
		}

		return p1 === p2;
	}

	lock.prototype.drawStatusPoint = function(type) {
		for (var i = 0; i < this.lastPoint.length; i++) {
			this.ctx.strokeStyle = type;
			this.ctx.beginPath();
			this.ctx.arc(this.lastPoint[i].x, this.lastPoint[i].y, this.r, 0, Math.PI * 2, true);
			this.ctx.closePath();
			this.ctx.stroke();
		}
	}

	lock.prototype.storePass = function(psw) {
		if (this.pswObj.step == 1) {
			if (this.checkPass(this.pswObj.fpassword, psw)) {
				this.pswObj.step = 2;
				this.pswObj.spassword = psw;
				this.title.innerHTML = '密码保存成功';
				this.drawStatusPoint('#2cff26');
				window.localStorage.setItem('passwordxx', JSON.stringify(this.pswObj.spassword));
				window.localStorage.setItem('chooseType', this.chooseType);
			} else {
				self.title.innerHTML = '两次不一样，请重新输入';
				this.drawStatusPoint('red');
				delete this.pswObj.step;
			}
		} else if (this.pswObj.step == 2) {
			if (this.checkPass(this.pswObj.spassword, psw)) {
				this.title.innerHTML = '解锁成功';
				this.drawStatusPoint('#2cff26');
			} else {
				this.title.innerHTML = '解锁失败';
				this.drawStatusPoint('red');
			}
		} else {
			this.pswObj.step = 1;
			this.pswObj.fpassword = psw;
			this.title.innerHTML = '再次输入';
		}
	}

	lock.prototype.update = function(po) {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

		for (var i = 0; i < this.arr.length; i++) {
			this.drawCle(this.arr[i].x, this.arr[i].y);
		}

		this.drawPoint(this.lastPoint);
		this.drawLine(po, this.lastPoint);

		for (var i = 0; i < this.restPoint.length; i++) {
			if (Math.abs(po.x - this.restPoint[i].x) < this.r && Math.abs(po.y - this.restPoint[i].y) < this.r) {
				this.drawPoint(this.restPoint[i].x, this.restPoint[i].y);
				this.lastPoint.push(this.restPoint[i]);
				this.restPoint.splice(i, 1);
				break;
			}
		}
	}

	lock.prototype.drawLine = function(po, lastPoint) {
		this.ctx.beginPath();
		this.ctx.lineWidth = 3;
		this.ctx.moveTo(this.lastPoint[0].x, this.lastPoint[0].y);

		for (var i = 1; i < this.lastPoint.length; i++) {
			this.ctx.lineTo(this.lastPoint[i].x, this.lastPoint[i].y);
		}
		this.ctx.lineTo(po.x, po.y);
		this.ctx.stroke();
		this.ctx.closePath();
	}

	lock.prototype.drawPoint = function() {
		for (var i = 0; i < this.lastPoint.length; i++) {
			this.ctx.fillStyle = '#cfe6ff';
			this.ctx.beginPath();
			this.ctx.arc(this.lastPoint[i].x, this.lastPoint[i].y, this.r / 2, 0, Math.PI * 2, true);
			this.ctx.closePath();
			this.ctx.fill();
		}
	}

	lock.prototype.drawCle = function(x, y) {
		this.ctx.strokeStyle = '#cfe6ff';
		this.ctx.lineWidth = 2;
		this.ctx.beginPath();
		this.ctx.arc(x, y, this.r, 0, Math.PI * 2, true);
		this.ctx.closePath();
		this.ctx.stroke();
	}

	lock.prototype.createCircle = function() {
		var n = this.chooseType;

		var count = 0;
		this.r = this.ctx.canvas.width / (2 + 4 * n);
		// 2(1+2*n) = width;
		this.lastPoint = [];
		this.arr = [];
		this.restPoint = [];

		var r = this.r;
		// console.log(r);

		for (var i = 0; i < n; i++) {
			for (var j = 0; j < n; j++) {
				count++;
				var obj = {
					x: j * 4 * r + 3 * r,
					y: i * 4 * r + 3 * r,
					index: count
				};
				this.arr.push(obj);
				this.restPoint.push(obj);
			}
		}
		// console.log(this.arr)
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		for (var i = 0; i < this.arr.length; i++) {
			this.drawCle(this.arr[i].x, this.arr[i].y);
		}
	}

	lock.prototype.makeState = function() {
		if (this.pswObj.step == 2) {
			this.updatePasswordEle.style.display = 'block';
			this.title.innerHTML = '请解锁';
		} else if (this.pswObj.step == 1) {
			this.updatePasswordEle.style.display = 'none';
		} else {
			this.updatePasswordEle.style.display = 'none';
		}
	}

	lock.prototype.init = function() {
		this.initDom();

		this.updatePasswordEle = document.getElementById('updatePassword');
		this.title = document.getElementById('title');

		// 有密码的是2
		this.pswObj = window.localStorage.getItem('passwordxx') ? {
			step: 2,
			spassword: JSON.parse(window.localStorage.getItem('passwordxx'))
		} : {};

		this.lastPoint = [];
		this.makeState();

		this.touchFlag = false;
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.createCircle();

		this.bindEvent();
	}

	lock.prototype.initDom = function() {
		var wrap = document.createElement('div');
		var str = '<h4 id="title" class="title">绘制解锁图案</h4>' + '<a id="updatePassword" style="position:absolute;right:5px;top:5px;color:#fff;font-size:10px;display:none;">重置密码</a>' + '<canvas id="canvas" width="300" height="300" style="background-color:#305066;display:inline-block;margin-top:15px;"></canvas>';
		wrap.setAttribute('style', 'position:absolute;top:0;left:0;right:0;bottom:0');
		wrap.innerHTML = str;
		document.body.appendChild(wrap);
	}
})();