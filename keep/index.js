let crypto = require('crypto-js'),
  fs = require('fs'),
  keep = require('./keep.json'),
  config = require('./config.js')

let secret = config.secret

let ciphertext = crypto.AES.encrypt(JSON.stringify(keep), secret)

fs.writeFile('./keep.txt', ciphertext.toString(), (err) => {
  if (err) {
    return console.error(err)
  }
  console.log('写入数据成功')

  console.log('读取写入的内容')

  fs.readFile('./keep.txt', (err, data) => {
    if (err) {
      return console.error(err)
    }
    console.log('异步读取的文件数据:\n' + data.toString())

    // 解密过程
    let bytes = crypto.AES.decrypt(data.toString(), secret)
    let decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8))
    console.log(decryptedData)
  })
})
