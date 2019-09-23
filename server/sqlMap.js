//"select * from 表名  WHERE 字段 like '%" +  你需要传入的值 + "%'"

let nowDate = new Date();
let year = nowDate.getFullYear();
let month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1): nowDate.getMonth() + 1;
let day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
let datetime = year + "-" + month + "-" + day;  // "2018-03-26"
let datetimes = '2019-04-09'
console.log(datetime)
var sqlMap = {
  data: {
      tourNum: "select * from getui_tournum where create_time like '%" +  datetimes + "%'",
    }
}

module.exports = sqlMap