语法源于java,一等函数源于scheme，基于原型继承self

健壮性，高效性，通用性

JS语言核心针对文本、数组、日期和正则表达式定义了很少API，书本第一部分涵盖了语言本身的特性以及少量的API

客户端JS通常是指在宿主环境是浏览器下工作的js

    function Point(x,y){
        this.x = x;
        this.y = y;
    }

    var p = new Point(1,1);

    Point.prototype.r = function(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
    p.r();

    => 1.4142135623730951

---

    function debug(msg){
        var log = document.getElementById('debuglog');
        if(!log){
            log = document.createElement('div');
            log.id = 'debuglog';
            log.innerHTML = '<h1>Debug log</h1>';
            document.body.appendChild(log);
        }
        var pre = document.createElement('pre');
        var text = document.createTextNode(msg);
        pre.appendChild(text);
        log.appendChild(pre);
    }

---

    function hide(e,reflow){
        if(reflow){
            e.style.display = 'none';
        }
        else{
            e.style.visibility = 'hidden';
        }
    }

    function highlight(e){
        if(!e.className) e.className = 'hilite';
        else e.className += ' hilite';
    }

---

    window.onload = function(){
        var images = document.getElementsByTagName('img');
        for(var i = 0 ; i < images.length; i++){
            var image = images[i];
            if(image.addEventListener){
                image.addEventListener('click',hide,false);
            }
            else{
                image.attachEvent('onclick',hide);
            }
        }
        function hide(event){
            event.target.style.visibility='hidden';
        }
    }

---

    function debug(msg){
        var log = $('#debuglog');
        if(log.length == 0){
            log = $("<div id='debuglog'><h1>Debug Log</h1></div>");
            log.appendTo(document.body);
        }
        log.append($('<pre/>').text(msg));
    }