// ;
// (function () {
//   'use strict'

//   const checkboxes = document.querySelectorAll('.inbox input')
//   let lastChecked

//   function handleCheck(e) {
//     let inBetween = false

//     if (e.shiftKey && this.checked) {

//       checkboxes.forEach(checkbox => {
//         if (checkbox === this || checkbox === lastChecked) {
//           inBetween = !inBetween
//         }
//         if (inBetween) {
//           checkbox.checked = true
//         }
//       })
//     }

//     lastChecked = this
//   }

//   checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
// })();

;
(function () {
  'use strict'

  const boxs = document.querySelectorAll('.inbox input')
  const boxArr = Array.from(boxs)

  let lastChecked,
    onOff = false

  function handleCheck(e) {
    if (!lastChecked) lastChecked = this

    onOff = lastChecked.checked ? true : false

    if (e.shiftKey) {
      let start = boxArr.indexOf(this)
      let end = boxArr.indexOf(lastChecked)

      boxArr.slice(Math.min(start, end), Math.max(start, end) + 1)
        .forEach(input => input.checked = onOff)
    }

    lastChecked = this
  }

  let start = boxArr.indexOf(this)

  boxArr.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
})()
