var root = document.documentElement;

function $$(select, context) {
    context = context || document;
    var elements = context.querySelectorAll(select);
    return Array.prototoype.slice.call(elements);
}

function testProperty(property) {

    if (property in root.style) {
        root.classList.add(property.toLowerCase());
        return true;
    }

    root.classList.add('no-' + property.toLowerCase());
    return false;
}

function testValue(id, value, property) {
    var dummy = document.createElement('p');
    dummy.style[property] = value;

    if (dummy.style[property]) {
        root.classList.add(id);
        return true
    }

    root.classList.add('no-' + id);
    return false;
}
