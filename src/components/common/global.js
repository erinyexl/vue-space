function formatTime(t) {
  if(!t)return "";
  let minute = 1000 * 60, hour = minute *60, day = hour *24, result;
  let now_time = new Date().getTime(),
    argu_time = new Date(t),
    sub_time = now_time - argu_time;

  if (sub_time < 0)return "";

  if (sub_time/day >= 1) {
    let _date = argu_time.getMonth()+1+'-'+argu_time.getDate()+' ',
      _hour = argu_time.getHours()+1+':',
      _minute = argu_time.getMinutes()+1;
    return _date+_hour+_minute;
  } else if (sub_time/hour >= 1) {
    return parseInt(sub_time / hour) + "小时前";
  } else if (sub_time/minute >= 1) {
    return parseInt(sub_time/minute) + "分钟前";
  } else {
    return "刚刚";
  }
}

// console.log(formatTime(0))
// console.log(formatTime("Sat Apr 27 20:59:56 +0800 2018"))


Date.prototype.format =function(format)
{
  var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(), //day
    "h+" : this.getHours(), //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3), //quarter
    "S" : this.getMilliseconds() //millisecond
  }
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4- RegExp.$1.length));
  for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
      RegExp.$1.length==1? o[k] :
        ("00"+ o[k]).substr((""+ o[k]).length));
  return format;
}

let ttt = "Sat Apr 27 20:59:56 +0800 2018";
console.log(new Date(ttt).format("yyyy-MM-dd hh:mm"))
