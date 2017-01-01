// var btn = document.getElementById('myBtn');

// btn.addEventListener('click', function(event) {
//     console.log(event.type);

//     console.log(event.currentTarget);
//     console.log(event.target);
//     console.log(this);
// });

// document.body.addEventListener('click', function(event) {
//     console.log(event.currentTarget);
//     console.log(event.target);
//     console.log(this);
// });

// var handler = function(event) {
//     switch (event.type) {
//         case 'click':
//             console.log('clicked');
//             break;
//         case 'mouseover':
//             console.log('mouseover');
//             event.target.style.backgroundColor = 'red';
//             break;
//         case 'mouseout':
//             event.target.style.backgroundColor = '';
//             break;
//     }
// }

// myBtn.addEventListener('click', handler, false);
// myBtn.addEventListener('mouseover', handler, false);
// myBtn.addEventListener('mouseout', handler, false);
var myImg = document.getElementById('myImg');

EventUtil.addHandler(myImg, 'load', function(event) {
    event = EventUtil.getEvent(event);
    console.log(EventUtil.getTarget(event).src);
});

EventUtil.addHandler(window, 'load', function() {
    // var img = document.createElement('img');
    var img = new Image();
    EventUtil.addHandler(img, 'load', function(event) {
        event = EventUtil.getEvent(event);
        console.log(EventUtil.getTarget(event).src);
    });
    document.body.appendChild(img);
    img.src = './1.png';

    EventUtil.addHandler(img, 'click', function(event) {
        event = EventUtil.getEvent(event);
        console.log('Client coordinates: ' + event.clientX + ',' + event.clientY);
        console.log('Page coordinates: ' + event.pageX + ',' + event.pageY);

        var pageX = event.pageX;
        var pageY = event.pageY;

        if (pageX === undefined) {
            pageX = event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft);
        }
        if (pageY === undefined) {
            pageX = event.clientY + (document.body.scrollTop || document.documentElement.scrollTop);
        }

        console.log('Page coordinates: ' + pageX + ',' + pageY);

        console.log('Screen coordinates: ' + event.screenX + ',' + event.screenY);

        var keys = new Array();

        if (event.shiftKey) {
            keys.push('shift');
        }
        if (event.ctrlKey) {
            keys.push('ctrl');
        }
        if (event.altKey) {
            keys.push('alt');
        }
        if (event.metaKey) {
            keys.push('meta');
        }
        console.log('keys: ' + keys.join(','));

    });
});

EventUtil.addHandler(window, 'scroll', function(event) {
    // console.log(document.documentElement.scrollTop);
    // console.log(document.body.scrollTop);

});

var myDiv = document.getElementById('myDiv');

EventUtil.addHandler(myDiv, 'mouseout', function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    var relatedTarget = EventUtil.getRelatedTarget(event);
    console.log('moused out of ' + target.tagName + ' to ' + relatedTarget.tagName);
});

EventUtil.addHandler(document, 'mousewheel', function(event) {
    event = EventUtil.getEvent(event);

    console.log(event.wheelDelta);
});

var myText = document.getElementById('myText');
EventUtil.addHandler(myText, 'keyup', function(event) {
    event = EventUtil.getEvent(event);
    console.log(event.keyCode);
});
EventUtil.addHandler(myText, 'keypress', function(event) {
    event = EventUtil.getEvent(event);
    console.log(EventUtil.getCharCode(event));
    console.log(String.fromCharCode(EventUtil.getCharCode(event)));
});
