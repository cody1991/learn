(function($) {
    var bvd = function(dom) {
        var that = this;
        $.ready(function() {
            that.video = document.querySelector(dom || 'video');
            that.vRoom = that.video.parentNode;
            that.initEm();

            that.initEvent();

            that.initInfo();

            this.isMax = false;
        });

    }

    var pro = bvd.prototype;

    pro.initInfo = function() {
        var that = this;
        window.onload = function() {
            that.miniInfo = {
                width: that.video.offsetWidth + 'px',
                height: that.video.offsetHeight + 'px',
                position: that.vRoom.style.position,
                transform: 'translate(0,0) rotate(0deg)'
            };

            var info = [
                    document.documentElement.clientWidth || document.body.clientWidth,
                    document.documentElement.clientHeight || document.body.clientHeight
                ],
                w = info[0],
                h = info[1],
                cha = Math.abs(h - w) / 2;

            that.maxInfo = {
                zIndex: 99,
                width: h + 'px',
                height: w + 'px',
                position: 'fixed',
                transform: 'translate(-' + cha + 'px,' + cha + 'px) rotate(90deg)'
            }
        }
    }
    pro.switch = function() {
        var vR = this.vRoom;
        var info = this.isMax ? this.miniInfo : this.maxInfo;
        for (var i in info) {
            vR.style[i] = info[i];
        }
        this.isMax = !this.isMax;
    }

    pro.initEm = function() {
        this.vimg = document.createElement('img');
        this.vimg.src = './images/play.png';
        this.vimg.className = 'play-btn';
        this.vRoom.appendChild(this.vimg);

        this.vC = document.createElement('div');
        this.vC.classList.add('controls');
        this.vC.innerHTML = '<div><div class="progress-bar"><div class="time-bar"></div></div></div><div><span class="current">00:00</span>/<span class="duration">00:00</span></div><div><span class="fill">全屏</span></div>'
        this.vRoom.appendChild(this.vC);
    }

    pro.initEvent = function() {
        var that = this;
        this.vimg.addEventListener('tap', function() {
            that.video.play();
        });
        this.video.addEventListener('tap', function() {
            if (this.paused || this.ended) {
                if (this.ended) {
                    this.currentTime = 0;
                }
                this.play();
            } else {
                this.pause();
            }
        });
        this.video.addEventListener('play', function() {
            that.vimg.style.display = 'none';
            that.vC.classList.add('vhidden');
            that.vCt = setTimeout(function() {
                that.vC.style.visibility = 'hidden';
            }, 3400);
        });
        this.video.addEventListener('loadedmetadata', function() {
            that.vDuration = this.duration;
            that.vC.querySelector('.duration').innerHTML = stom(that.vDuration);
        });
        this.video.addEventListener('timeupdate', function() {
            var currentPos = this.currentTime;
            var percentage = 100 * currentPos / that.vDuration;
            that.vC.querySelector('.time-bar').style.width = percentage + '%';
            that.vC.querySelector('.current').innerHTML = stom(currentPos);
        });
        this.video.addEventListener('pause', function() {
            that.vimg.style.display = 'block';
            that.vC.classList.remove('vhidden');
            that.vC.style.visibility = 'visible';
            that.vCt && clearTimeout(that.vCt);
        });

        this.video.addEventListener('swiperight', function(e) {
            this.currentTime += 5;
        });
        this.video.addEventListener('swipeleft', function(e) {
            this.currentTime -= 5;
        });

        this.vC.querySelector('.fill').addEventListener('tap', function() {
            // that.nativeMax();
            that.switch();
        })
    }

    pro.nativeMax = function() {
        // if (!window.plus) {
        //     console.log(window.plus);
        //     return;
        // }
        if ($.os.ios) {
            console.log('ios');
            this.video.removeAttribute('webkit-playsinline');
        } else if ($.os.android) {
            console.log('android');
            var url = this.video.querySelector('source').src;
            var Intent = plus.android.importClass("android.content.Intent");
            var Uri = plus.android.importClass("android.net.Uri");
            var main = plus.android.runtimeMainActivity();
            var intent = new Intent(Intent.ACTION_VIEW);
            var uri = Uri.parse(url);
            intent.setDataAndType(uri, "video/*");
            main.startActivity(intent);
        }
    }

    function stom(t) {
        var m = Math.floor(t / 60);
        m < 10 && (m = '0' + m);
        return m + ":" + (t % 60 / 100).toFixed(2).slice(-2);
    }

    var nv = null;
    $.bvd = function(dom) {
        return nv || (nv = new bvd(dom));
    }

})(mui);

(function($) {
    var v = $.bvd();
})(mui);
