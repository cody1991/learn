(function() {
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
		});
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
		this.resetPoint = [];

		var r = this.r;
		console.log(r);

		for (var i = 0; i < n; i++) {
			for (var j = 0; j < n; j++) {
				count++;
				var obj = {
					x: j * 4 * r + 3 * r,
					y: i * 4 * r + 3 * r,
					index: count
				};
				this.arr.push(obj);
				this.resetPoint.push(obj);
			}
		}
		console.log(this.arr)
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		for (var i = 0; i < this.arr.length; i++) {
			this.drawCle(this.arr[i].x, this.arr[i].y);
		}
	}

	lock.prototype.makeState = function() {
		if (this.pwsObj.step == 2) {
			this.updatePassword.style.display = 'block';
			this.title.innerHTML = '请解锁';
		} else if (this.pwsObj.step == 1) {
			this.updatePassword.style.display = 'none';
		} else {
			this.updatePassword.style.display = 'none';
		}
	}

	lock.prototype.init = function() {
		this.initDom();

		this.updatePassword = document.getElementById('updatePassword');
		this.title = document.getElementById('title');

		this.pwsObj = window.localStorage.getItem('passwordxx') ? {
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