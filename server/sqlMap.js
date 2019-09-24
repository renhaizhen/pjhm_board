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
      rightQiji:" SELECT * FROM getui_tournum where  `name` = '奇迹花园区' AND DATE_SUB(CURDATE(), INTERVAL 62 DAY) < date(time) ORDER BY time ASC ",
      rightLiujiu:" SELECT * FROM getui_tournum where  `name` = '柳鹭田园区' AND DATE_SUB(CURDATE(), INTERVAL 62 DAY) < date(time) ORDER BY time ASC ",
      rightSenlin:" SELECT * FROM getui_tournum where  `name` = '森林游憩区' AND DATE_SUB(CURDATE(), INTERVAL 62 DAY) < date(time) ORDER BY time ASC ",
      rightHuoli:" SELECT * FROM getui_tournum where  `name` = '活力森林区' AND DATE_SUB(CURDATE(), INTERVAL 62 DAY) < date(time) ORDER BY time ASC ",
      rightBinjiang:" SELECT * FROM getui_tournum where  `name` = '滨江漫步区' AND DATE_SUB(CURDATE(), INTERVAL 62 DAY) < date(time) ORDER BY time ASC ",
    },
}


module.exports = sqlMap