function getQueryStringArgs() {
    var qs = (location.search.length > 0 ? location.search.substring(1) : '');

    var args = {};

    var items = qs.length ? qs.split('&') : [];

    item = null;
    name = null;
    value = null;

    i = 0;
    len = items.length;

    for (i = 0; i < len; i++) {
        item = items[i].split('=');
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }

    return args;
}

console.log(getQueryStringArgs());

function hasPlugin(name) {
    name = name.toLowerCase();

    console.log(navigator.plugins);

    for (var i = 0; i < navigator.plugins.length; i++) {
        if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
            return true;
        }
    }
    return false;
}

console.log(hasPlugin('Flash'));
