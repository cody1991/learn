var EventUtil = {
    getEvent: function(event) {
        return event || window.event;
    },
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    on: function(ele, type, handler) {
        if (ele.addEventListener) {
            ele.addEventListener(type, handler, false);
            return handler;
        } else if (ele.attachEvent) {
            function wrapper(event) {
                // 在ele上面调用handler函数，带入参数event
                return handler.call(ele, event);
            }
            ele.attachEvent('on' + type, wrapper);
            return wrapper;
        }
    },
    off: function(ele, type, handler) {
        if (ele.removeEventLisener) {
            ele.removeEventLisener(type, handler, false);
        } else if (ele.detachEvent) {
            ele.detachEvent('on' + type, handler);
        }
    },
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else if ('returnValue' in event) {
            event.returnValue = false;
        }
    },
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else if ('cancelBubble' in event) {
            event.cancelBubble = true;
        }
    }
}

var DOMUtil = {
    text: function(ele) {
        if ('textContent' in ele) {
            return ele.textContent;
        } else if ('innerText' in ele) {
            return ele.innerText;
        }
    },
    prop: function(ele, propName) {
        return ele.getAttribute(propName);
    }
}

var nav = document.getElementById('nav');

EventUtil.on(nav, 'click', function(event) {
    // EventUtil.preventDefault(event);

    var event = EventUtil.getEvent(event),
        target = EventUtil.getTarget(event);
    console.log(target.nodeName);

    // if (target && target.nodeName == 'LI') {

    var children = this.children;

    var i, len;
    var anchor;
    var obj = {};

    for (i = 0, len = children.length; i < len; ++i) {
        if (children[i] === target && target.tagName == 'LI') {
            obj.index = i + 1;
            anchor = target.getElementsByTagName('a')[0];
            obj.name = DOMUtil.text(anchor);
            obj.link = DOMUtil.prop(anchor, 'href');
        }
    }

    console.log('index: ' + obj.index + ' name: ' + obj.name + ' link: ' + obj.link);
    // }

});
