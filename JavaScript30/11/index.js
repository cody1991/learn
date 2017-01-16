;
(function() {
  'use strict'

  const player = document.querySelector('.player')
  const video = player.querySelector('video')
  const progress = player.querySelector('.progress')
  const progressBar = player.querySelector('.progress-filled')
  const toggle = player.querySelector('.toggle')
  const skipButtons = player.querySelectorAll('[data-skip]')
  const ranges = player.querySelectorAll('.player-slider')

  function togglePlay () {
    const method = video.paused ? 'play' : 'pause'
    video[method]()
  }

  function updateButton () {
    const icon = this.paused ? 'play' : 'paused'
    toggle.textContent = icon
  }

  function skip () {
    video.currentTime += parseFloat(this.dataset.skip)
  }

  function handleRangeUpdate () {
    video[this.name] = this.value
  }

  function handleProgress () {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
  }

  function scrub (e) {
    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX
    // The MouseEvent.offsetX read-only property provides the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node.
    console.log(e.offsetX)
    console.log(progress.offsetWidth)
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
  }

  video.addEventListener('click', togglePlay)
  video.addEventListener('play', updateButton)
  video.addEventListener('pause', updateButton)
  video.addEventListener('timeupdate' ,handleProgress)

  toggle.addEventListener('click', togglePlay)

  skipButtons.forEach(button => button.addEventListener('click', skip))

  ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
  ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

  let mousedown = false
  progress.addEventListener('click', scrub)
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
  progress.addEventListener('mousedown', () => mousedown = true)
  progress.addEventListener('mouseup', () => mousedown = false)
})();
