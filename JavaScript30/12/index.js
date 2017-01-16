;
(function() {
  'use strict'

  const pressed = []
  const secretCode = 'cody19'

  window.addEventListener('keyup', (e) => {
    pressed.push(e.key)
    
    console.log(-secretCode.length -1)
    console.log(pressed.length - secretCode.length)
    
    //pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
    
    pressed.splice(0, pressed.length - secretCode.length)
    if (pressed.join('').includes(secretCode)) {
      console.log('Ding Ding!')
      cornify_add()
    }

    console.log(pressed)
  })

})();
