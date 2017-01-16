;
(function() {
  'use strict'

  const sliderImages = document.querySelectorAll('.slide-in')

  window.addEventListener('scroll', debounce(checkSlide))

  function checkSlide (e) {
    // console.clear()
    sliderImages.forEach(sliderImage => {
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 
2
      // console.log(window.scrollY, window.innerHeight, sliderImage.height, slideInAt)
      const imageBottom = sliderImage.offsetTop + sliderImage.height
      const isHalfShow = slideInAt > sliderImage.offsetTop
      const isNotScrolledPast = window.scrollY < imageBottom

      if (isHalfShow && isNotScrolledPast) {
        sliderImage.classList.add('active')
      } else {
        sliderImage.classList.remove('active')
      }
    })
  }

  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
      let context = this,args = arguments
      let later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      let callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }
})();
