function isHostMethod(object, property) {
    var t = typeof object[property];

    return t == 'function' ||
        (!!(t == 'object' && object[property])) ||
        t == 'unknown';
}
