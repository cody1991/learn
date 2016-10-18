var EventUtil = {
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else(element.attachEvent) {
            element.attachEvent('on' + type, function() {
                return handler.call(element, window.event);
            });
        } else {
            element['on' + type] = handler;
        }
    },
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, function() {
                return handler.call(element, window.event);
            });
        } else {
            element['on' + type] = null;
        }
    }
}
