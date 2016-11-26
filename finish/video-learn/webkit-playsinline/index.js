// It is good practice to have your inline videos load before the user initiates playback. This allows your videos to download in the background so they will be available for immediate playback when the user is ready to watch them

var video = document.createElement('video');
video.setAttribute('webkit-playsinline', 'true');
video.setAttribute('src', 'http://vjs.zencdn.net/v/oceans.mp4');

document.body.appendChild(video);

video.addEventListener('canplaythrough', function() {
    video.play(); // // wait until enough of the video has been downloaded to play it through without hiccups
});

video.load(); //  must be called after the canplaythrough event listener is set
// video.play();
// video.pause();
