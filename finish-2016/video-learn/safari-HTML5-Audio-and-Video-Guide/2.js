var myVideo = document.getElementsByTagName('video')[0];

console.log(myVideo.buffered);

myVideo.addEventListener('progress', getPercentProg, false);
myVideo.addEventListener('canplaythrough', myAutoPlay, false);

function getPercentProg() {
    var endBuf = myVideo.buffered.end(0);

    if (!endBuf) {
        return;
    }

    // var myBuffered = myVideo.buffered;
    // var total = 0;
    // for (var i = 0, len = myBuffered.length; i < len; i++) {
    //     total += (seekable.end(i) - seekable.start(i));
    // }
    // console.log(total);

    var soFar = parseInt(((endBuf / myVideo.duration) * 100));
    document.getElementById('loadStatus').innerHTML = soFar + '%';
}

function myAutoPlay() {
    myVideo.play();
}

function playPause() {
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
}

function makeBig() {
    myVideo.height = myVideo.videoHeight * 2;
}

function makeNormal() {
    myVideo.height = myVideo.videoHeight
}
