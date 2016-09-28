function serializeForm(form) {
    if (!form || form.nodeName.toUpperCase() !== 'FORM') {
        return;
    }

    var result = [];
    var i, len;
    var field, fieldName, fieldType;

    for (i = 0, len = form.length; i < len; ++i) {
        field = form.elements[i];
        fieldName = field.name;
        fieldType = field.type;

        if (field.disabled || !fieldName) {
            continue;
        }


        switch (fieldType) {
            case 'text':
            case 'password':
            case 'hidden':
            case 'textarea':
                result.push(encodeURIComponent(fieldName) + '=' + encodeURIComponent(field.value));
                break;
            case 'radio':
            case 'checkbox':
                if (field.checked) {
                    result.push(encodeURIComponent(fieldName) + '=' + encodeURIComponent(field.value))
                }
                break;
            case 'select-one':
            case 'select-multiple':
                for (var j = 0, jLen = field.options.length; j < jLen; ++j) {
                    if (field.options[j].selected) {
                        result.push(encodeURIComponent(fieldName) + '=' + encodeURIComponent(field.options[j].value || field.options.text));
                    }
                }
                break;
            case 'file':
            case 'submit':
                break;
            default:
                break;
        }
    }

    return result.join('&');
}

var form = document.getElementById('target');

console.log(serializeForm(form));
