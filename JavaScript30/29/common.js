;
(function() {
  'use strict'

   let countdown
   
   const timerDisplay = document.querySelector('.display-time-left')
   const endTime = document.querySelector('.display-end-time')
   const buttons = document.querySelectorAll('[data-time]')

   buttons.forEach(button => button.addEventListener('click', startTimer))

   document.customForm.addEventListener('submit', function(e) {
     e.preventDefault()
     const mins = this.minutes.value
     timer(mins * 60)
     this.reset()
   })

   function startTimer() {
     const seconds = parseInt(this.dataset.time)
     timer(seconds)
   }

   function timer(seconds) {
     clearInterval(countdown)

     const now = Date.now()
     const then = now + seconds * 1000
     
     displayTimeLeft(seconds)
     displayEndTime(then)
     
     countdown = setInterval(() => {
       const secondsLeft = Math.round((then - Date.now()) / 1000)
       if (secondsLeft < 0) {
         clearInterval(countdown)
         return
       }

       displayTimeLeft(secondsLeft)
     }, 1000)
   }

   function displayEndTime(timestamp) {
     const end = new Date(timestamp)
     const hour = end.getHours()
     const adjustedHour = hour > 12 ? hour - 12 : hour
     const minutes = end.getMinutes()
     
     endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`
   } 

   function displayTimeLeft(seconds) {
     const minutes = Math.floor(seconds / 60)
     const remainderSeconds = seconds % 60
     const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
     document.title = display
     timerDisplay.textContent = display
   }
})();
