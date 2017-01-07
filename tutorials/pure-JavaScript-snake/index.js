;
(function () {
  'use strict'

  function getId(id) {
    return document.getElementById(id)
  }
  let jsDiv = getId('playground'),
    jsSnack = getId('snake'),
    jsFood = getId('food'),
    jsBody = getId('playground'),
    jsScore = getId('score')

  console.log(jsDiv, jsSnack)

  let timer,
    timer1 = setInterval(eat, 10),
    srr = [],
    num = 0,
    jsSnackBody

  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      // 左
    case 37:
      clearInterval(timer)
      timer = window.setInterval(runLeft, 10)

      function runLeft() {
        if (jsSnack.offsetLeft > 0) {
          jsSnack.style.left = jsSnack.offsetLeft - 1 + 'px'
          jsSnack.style.top = jsSnack.offsetTop + 'px'

          srr.push([jsSnack.offsetLeft, jsSnack.offsetTop])
          num++

          // console.log(srr, num)

        }
      }
      break
      // 上
    case 38:
      clearInterval(timer)
      timer = window.setInterval(runTop, 10)

      function runTop() {
        if (jsSnack.offsetTop > 0) {
          jsSnack.style.top = jsSnack.offsetTop - 1 + 'px'
          jsSnack.style.left = jsSnack.offsetLeft + 'px'

          srr.push([jsSnack.offsetLeft, jsSnack.offsetTop])
          num++

          // console.log(srr, num)

        }
      }
      break
      // 右
    case 39:
      clearInterval(timer)
      timer = window.setInterval(runRight, 10)

      function runRight() {
        if (jsSnack.offsetLeft + jsSnack.offsetWidth < 450) {
          jsSnack.style.left = jsSnack.offsetLeft + 1 + 'px'
          jsSnack.style.top = jsSnack.offsetTop + 'px'

          srr.push([jsSnack.offsetLeft, jsSnack.offsetTop])
          num++

          // console.log(srr, num)

        }

      }
      break
      // 下

    case 40:
      clearInterval(timer)
      timer = window.setInterval(runBottom, 10)

      function runBottom() {
        if (jsSnack.offsetTop + jsSnack.offsetHeight < 400) {
          jsSnack.style.top = jsSnack.offsetTop + 1 + 'px'
          jsSnack.style.left = jsSnack.offsetLeft + 'px'

          srr.push([jsSnack.offsetLeft, jsSnack.offsetTop])
          num++

          // console.log(srr, num)

        }

      }

      break
    }

  })

  function Pos() {
    jsFood.style.left = parseInt(Math.random() * (430 - 20 + 1) + 20) + "px"
    jsFood.style.top = parseInt(Math.random() * (380 - 20 + 1) + 20) + "px"
  }

  Pos()

  function eat() {
    rectangleCrashExamine(jsSnack, jsFood)

    function rectangleCrashExamine(obj1, obj2) {
      let obj1Left = obj1.offsetLeft,
        obj1Width = obj1.offsetLeft + obj1.offsetWidth,
        obj1Top = obj1.offsetTop,
        obj1Height = obj1.offsetTop + obj1.offsetHeight,

        obj2Left = obj2.offsetLeft,
        obj2Width = obj2.offsetLeft + obj2.offsetWidth,
        obj2Top = obj2.offsetTop,
        obj2Height = obj2.offsetTop + obj2.offsetHeight;

      if (!(obj1Left > obj2Width || obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top)) {
        console.log('碰撞了')
        jsSnackBody = document.createElement('div')
        jsSnackBody.setAttribute('class', 'body')
        jsBody.appendChild(jsSnackBody)
        Pos()

        setInterval(follow, 10)

        // setInterval(follow .10)
      }
    }
  }

  function follow() {
    let bodyNum = document.getElementsByClassName('body')

    jsScore.innerHTML = bodyNum.length

    let place = 0
    for (let i = 0; i < bodyNum.length; i++) {
      place += 20
      bodyNum[i].style.left = srr[num - place][0] + 'px'
      bodyNum[i].style.top = srr[num - place][1] + 'px'
    }
  }
})()
