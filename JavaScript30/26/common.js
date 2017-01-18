;
(function() {
  'use strict'

  const triggers = document.querySelectorAll('.cool > li')
  const background = document.querySelector('.dropdownBackground')
  const nav = document.querySelector('.top')
  
  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))

  function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active')
    background.classList.remove('open')
  }

  function handleEnter() {
    this.classList.add('trigger-enter')
    
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'),150)

    background.classList.add('open')

    const dropdown = this.querySelector('.dropdown')
    const dropdownCoords = dropdown.getBoundingClientRect()
    const navCoords = nav.getBoundingClientRect()

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty('width', `${coords.width}px`)
    background.style.setProperty('height', `${coords.height}px`)
    background.style.setProperty('transform',`translate(${coords.left}px, ${coords.top}px)`)
  }
})();
