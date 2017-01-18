;
(function() {
  'use strict'
  const holes = document.querySelectorAll('.hole')
  const scoreBoard = document.querySelector('.score')
  const moles = document.querySelectorAll('.mole')
  const start = document.querySelector('#start')
  let lastHole
  let timeUp = false
  let score = 0

  start.addEventListener('click',startGame)
  moles.forEach(mole => mole.addEventListener('click', bonk))

  function bonk(e) {
    // cheater..
    // 第一次看到这个
    // console.log(e.isTrusted)
    // 返回一个布尔值,表明当前事件是否是由用户行为触发(比如说真实的鼠标点击触发一个click事件), 还是由一个脚本生成的(使用事件构造方法,比如event.initEvent)
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Event/isTrusted
    if (!e.isTrusted) return
    score++
    this.classList.remove('up')
    scoreBoard.textContent = score
  }  

  function peep() {
    const time = randomTime(200, 1000)
    const hole = randomHole(holes)
    hole.classList.add('up')
    setTimeout(() => {
      hole.classList.remove('up')
      if (!timeUp) {
        peep()
      } else {
        alert('time over!')
      }
    }, time)
  }

  function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length)
    const hole = holes[index]
   
    if (hole === lastHole) {
      return randomHole(holes)
    }

    lastHole = hole
    return hole
  }

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }

  function startGame() {
    scoreBoard.textContent = 0
    timeUp = false
    score = 0
    peep()
    setTimeout(() => timeUp = true, 10000)
  }
})();
