var a = '1234567890123456',
    b = '    231231312312';

function add(a, b) {
    var res = '',
        c = 0;

    a = a.split('');
    b = b.split('');

    while (a.length || b.length || c) {
        console.log(c);
        c += ~~a.pop() + ~~b.pop();
        console.log(c);

        res = c % 10 + res;

        c = c > 9;
    }

    return res.replace(/^0+/, '');
}

console.log(add(a, b));
