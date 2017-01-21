const cheerio = require('cheerio')
const request = require('sync-request')
const fs = require('fs')

const url = 'https://movie.douban.com/subject/25662329/'
let html = ''

html = request('GET', url)
         .getBody()
         .toString()

// console.log(html)

function handleDB(html) {
  const $ = cheerio.load(html)
  const info = $('#info')
  const movieName = $('#content>h1>span[property="v:itemreviewed"]').text()
  
  console.log(movieName)

  const directories = $('#info span a[rel="v:directedBy"]')
  
  let directoriesString = '- 导演: '
  directories.each(function(i, ele) {
    directoriesString += $(this).text() + '/'
  }) 
  console.log(directoriesString)
  
  let starsName = '- 主演: '
  $('.actor .attrs a').each(function(i, ele) {
    starsName += $(this).text() + '/'
  })
  console.log(starsName)

  let runTime = '- 片长: ' + $('#info span[property="v:runtime"]').text()

  console.log(runTime)

  let kinds = '- 类型: '
  $('#info span[property="v:genre"]').each(function(i, ele) {
    kinds += $(this).text() + '/' 
  })

  console.log(kinds)

  let DBScore = $('.ll.rating_num').text()
  let DBVotes = $('a.rating_people>span').text()

  DBVotes = DBVotes.replace(/\B(?=(\d{3})+(?!\d))/g,',')
 
  console.log(DBScore, DBVotes)

  let DB = '- 豆瓣评分: ' + DBScore + '/10 ' + '(from ' + DBVotes + ' users)'
  console.log(DB) 

  let IMDBlink = $('#info').children().last().prev().attr('href')

  console.log(IMDBlink)

  let data = movieName + '\r\n' 
    + directoriesString + '\r\n'
    + starsName + '\r\n'
    + runTime + '\r\n'
    + kinds + '\r\n'
    + DB + '\r\n'

  console.log(data)

  // fs.appendFile()是个异步输出文件的方法。它是的作用是追加文件内容。如果这个文件不存在那么就会新建一个，并写入追加内容。
  fs.appendFile('dbmovie.txt', data, 'utf-8', function(err) {
    if (err) throw err;
    console.log('信息写入成功\r\n')
  })
}

handleDB(html)
