const items = [
  'thingie',
  'another thingie',
  'lots of stuff',
  'yadda yadda'
]

function listOfStuff() {
  let full_list = ''

  for (let i = 0; i < items.length; i++) {
    full_list = full_list + `<li> ${items[i]} </li>`
  }

  const contain = document.querySelector('#container')
  container.innerHTML = `<ul> ${full_list} </ul>`
}

listOfStuff()
