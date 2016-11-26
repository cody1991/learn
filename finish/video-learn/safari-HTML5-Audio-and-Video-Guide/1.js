var video = document.getElementById('video');

console.log(video);

video.volume = 0;
video.playbackRate = 4;
video.setAttribute('autoplay', true);

function init() {
    video.addEventListener('ended', loopVideo, false);
}

function loopVideo() {
    video.play();
}

init();
