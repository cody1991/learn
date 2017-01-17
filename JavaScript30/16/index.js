;
(function() {
  'use strict'

  const hero = document.querySelector('.hero')
  const text = hero.querySelector('h1')
  const walk = 500;

  hero.addEventListener('mousemove', shadow)

  function shadow (e) {
    const {offsetWidth: width, offsetHeight: height} = hero
    let {offsetX: x, offsetY: y} = e
    // console.log(x, y, width, height)
    // The MouseEvent.offsetX read-only property provides the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node.
    // offsetX offsetY 记好这两个相对于的定位
    // 这里绑定在 .hero 上面 一般就是鼠标相对于 .hero 左上角的鼠标偏移了
    // 当时也有可能 e.target 是他里面的文字，即 .text
    // 下面需要特许处理 不然显得很突兀
    
    //console.log(e.target)
    if (this !== e.target) {
      // 加上 .text 的鼠标偏移
      x = x + e.target.offsetLeft
      y = y + e.target.offsetTop
    }

    const xWalk = Math.round((x / width * walk) - (walk / 4))
    const yWalk = Math.round((x / height * walk) - (walk / 4))
    console.log(xWalk, yWalk)
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
      ${yWalk * -1}px ${xWalk * -1}px 0 rgba(0, 0, 255, 0.7)
    `
  }
})();
