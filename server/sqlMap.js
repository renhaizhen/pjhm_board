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
      rightQiji:" SELECT * FROM getui_tournum where  `name` = '奇迹花园区' AND DATE_SUB(CURDATE(), INTERVAL 7 DAY) < date(create_time) ORDER BY time ASC ",
      rightLiujiu:" SELECT * FROM getui_tournum where  `name` = '柳鹭田园区' AND DATE_SUB(CURDATE(), INTERVAL 7 DAY) < date(create_time) ORDER BY time ASC ",
      rightSenlin:" SELECT * FROM getui_tournum where  `name` = '森林游憩区' AND DATE_SUB(CURDATE(), INTERVAL 7 DAY) < date(create_time) ORDER BY time ASC ",
      rightHuoli:" SELECT * FROM getui_tournum where  `name` = '活力森林区' AND DATE_SUB(CURDATE(), INTERVAL 7 DAY) < date(create_time) ORDER BY time ASC ",
      rightBinjiang:" SELECT * FROM getui_tournum where  `name` = '滨江漫步区' AND DATE_SUB(CURDATE(), INTERVAL 7 DAY) < date(create_time) ORDER BY time ASC ",
      leftQiji:"select from_unixtime(UNIX_TIMESTAMP(time), '%Y-%m-%d %H'),FLOOR(AVG(`value`)) AS `value` from getui_heatmap_showsum where name = '奇迹花园区' group by  FLOOR(from_unixtime(UNIX_TIMESTAMP(time), '%H'))",
      leftHuoli:"select from_unixtime(UNIX_TIMESTAMP(time), '%Y-%m-%d %H'),FLOOR(AVG(`value`)) AS `value` from getui_heatmap_showsum where name = '活力森林区' group by  FLOOR(from_unixtime(UNIX_TIMESTAMP(time), '%H'))",
      leftLiujiu:"select from_unixtime(UNIX_TIMESTAMP(time), '%Y-%m-%d %H'),FLOOR(AVG(`value`)) AS `value` from getui_heatmap_showsum where name = '柳鹭田园区' group by  FLOOR(from_unixtime(UNIX_TIMESTAMP(time), '%H'))",
      leftBinjiang:"select from_unixtime(UNIX_TIMESTAMP(time), '%Y-%m-%d %H'),FLOOR(AVG(`value`)) AS `value` from getui_heatmap_showsum where name = '滨江漫步区' group by  FLOOR(from_unixtime(UNIX_TIMESTAMP(time), '%H'))",
      leftSenlin:"select from_unixtime(UNIX_TIMESTAMP(time), '%Y-%m-%d %H'),FLOOR(AVG(`value`)) AS `value` from getui_heatmap_showsum where name = '森林游憩区' group by  FLOOR(from_unixtime(UNIX_TIMESTAMP(time), '%H'))",
      heatMapData:"SELECT round(gcj02_lng,6) AS lng,round(gcj02_lat,6) AS lat, `value` AS count FROM getui_heatmap_show",
      timeTable:"SELECT `区域` AS 'quyu',`开园时间` AS 'open_time',`闭园时间` AS 'close_time'  FROM area"
    },
}


module.exports = sqlMap