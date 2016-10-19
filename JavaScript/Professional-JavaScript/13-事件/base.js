var btn = document.getElementById('myBtn');

btn.addEventListener('click', function(event) {
    console.log(event.type);

    console.log(event.currentTarget);
    console.log(event.target);
    console.log(this);
});

document.body.addEventListener('click', function(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(this);
});

var handler = function(event) {
    switch (event.type) {
        case 'click':
            console.log('clicked');
            break;
        case 'mouseover':
            console.log('mouseover');
            event.target.style.backgroundColor = 'red';
            break;
        case 'mouseout':
            event.target.style.backgroundColor = '';
            break;
    }
}

myBtn.addEventListener('click', handler, false);
myBtn.addEventListener('mouseover', handler, false);
myBtn.addEventListener('mouseout', handler, false);
