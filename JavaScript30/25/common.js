;
(function() {
  'use strict'

  const divs = document.querySelectorAll('div')
  const button = document.querySelector('button')

  function logText(e) {
    console.log(this.classList.value)
  }

  divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
  }))

  button.addEventListener('click', () => {
    console.log('Click!!!')
  },{
    once: true
  })
})();
