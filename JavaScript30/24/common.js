;
(function() {
  'use strict'

  const nav = document.querySelector('#main')
  let topOfNav = nav.offsetTop

  window.addEventListener('scroll', fixNav)
 
  function fixNav() {
    console.log(window.scrollY, topOfNav)
    if(window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px'
      document.body.classList.add('fixed-nav')
    } else {
      document.body.classList.remove('fixed-nav')
      document.body.style.paddingTop = 0
    }
  }
})();
