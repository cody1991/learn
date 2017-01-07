const selector = '.app__content'

let getScrollTop = (scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0) => {
  scrollTop = document.querySelector(selector).scrollTop
  return scrollTop
}

let getScrollHeight = (scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0) => {
  scrollHeight = document.querySelector(selector).scrollHeight
  return scrollHeight
}

let getWindowHeight = (windowHeight = 0) => {
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight
  }
  return windowHeight
}

const getScrollData = function () {
  let scrollTop = getScrollTop()
  let scrollHeight = getScrollHeight()
  let windowHeight = getWindowHeight()
  return {
    scrollTop,
    scrollHeight,
    windowHeight,
    scrollBottom: scrollHeight - scrollTop - windowHeight
  }
}

export default getScrollData
