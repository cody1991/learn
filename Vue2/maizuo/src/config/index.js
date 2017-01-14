// 工具类 🔧

import FastClick from 'fastclick'

// https://github.com/ftlabs/fastclick
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
