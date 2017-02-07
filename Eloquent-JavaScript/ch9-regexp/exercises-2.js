let text = "'I'm the cook,' he said, 'it's my job.'"

// 'I'm the cook,' he said, 'it's my job.'
// "I'm the cook," he said, "it's my job."

// 如果一个 ' 前面是 ^ 代表这个 ' 在开头，替换掉
// 如果一个 ' 前面是 \W 不是一个单词 也替换掉
// 如果一个 ' 后面是 $ 代表这个 ' 在末尾，替换掉
// 如果一个 ' 后面是 \W 不是一个单词 也替换掉

console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"'))
console.log(text.replace(/(^|\W)'|'(\W|$)/g, function (match, first) {
  console.log('match:', match, ' first:', first)

  return first + '"'
}))
