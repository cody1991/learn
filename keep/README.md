# 概括

程序猿打算开始锻炼身体啦

	// keep.json
    [{
      "day1": {
        "date": "2017.01.08",
        "weight": Number,
        "distance": Number,
        "time": Number,
        "photo": String,
        "AB-RIPPER": Boolean,
        "deep-squat": Boolean,
        "word": String
      }
    }]

    date: 锻炼的日期
    weight: 当前体重
    distance: 跑步距离
    time: 跑步用时
    photo: 当日自拍
    AB-RIPPER: 是否做了腹肌撕裂者
    deep-squat: 是否做了深蹲
    word: 一些想法

锻炼记录是一个 `json` 文件，里面的数据是一个对象数组，里面包含了每次锻炼的数据。

用了 [crypto-js](https://github.com/brix/crypto-js) 进行加密。

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
	
`config.js` 存着密钥，才能解密 `keep.json` 加密后的 `keep.txt` 文件，而 `photo` 存放自拍，这三个都写在 `.gitignore` 文件里面，不进行上传

	photo/
	config.js
	keep.json

这么做，首先想试试加密库，然后是锻炼记录暂时不想公开，最后规划成 `json` 格式也是方便以后的读取。

	
	
    
