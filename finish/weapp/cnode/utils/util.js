function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getDateDiff(dataTimeStamp){

  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const halfamonth = day * 15;
  const month = day * 30;
  const year = day * 365;

  let result = '';

  let now = new Date().getTime();
  let diffValue = now - dataTimeStamp;

  if(diffValue < 0){
    return '数据出错';
  }

  const yearC = diffValue / year;
  const monthC = diffValue / month;
  const weekC = diffValue / (7 * day);
  const dayC = diffValue / day;
  const hourC = diffValue / hour;
  const minC = diffValue / minute;

  if(yearC >= 1){
    result = parseInt(yearC) + '年以前';
  }else if(monthC >= 1){
    result = parseInt(monthC) + '个月前';
  }else if(weekC >= 1){
    result = parseInt(weekC) + '星期前';
  }else if(dayC >=1){
    result = parseInt(dayC) + '天前';
  }else if(hourC >=1){
    result = parseInt(hourC) + '小时前';
  }else if(minC >= 5){
    result = parseInt(minC) + '分钟前';
  }else{
    result = '刚刚发表';
  }

  return result;
}

module.exports = {
  formatTime,
  getDateDiff
}
