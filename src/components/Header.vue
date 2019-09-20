<template>
  <div class="headerContainer">
    <div class="left">
      <span class="week">{{week}}</span>
      <span class="date">{{date}}</span>
      <span class="time">{{time}}</span>
    </div>
    <div class="right">
      <p>上海浦江郊野公园数据大屏</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      week: "",
      date: "",
      time: ""
    };
  },
  mounted() {
    this.getTime();
  },
  methods: {
    getTime() {
      setInterval(() => {
        var newDate = new Date();
        console.log(newDate);
        //获取月日和具体时间
        var month = newDate.getMonth() + 1;
        var day = newDate.getDate();
        var hours = newDate.getHours();
        var minutes = newDate.getMinutes();
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        this.date = month + "-" + day;
        this.time = hours + ":" + minutes;
        //获取星期
        var weekday = new Array(7);
        weekday[0] = "周日";
        weekday[1] = "周一";
        weekday[2] = "周二";
        weekday[3] = "周三";
        weekday[4] = "周四";
        weekday[5] = "周五";
        weekday[6] = "周六";
        this.week = weekday[newDate.getDay()];
      }, 1000);
    }
  }
};
</script>

<style scoped>
.headerContainer {
  overflow: hidden;
  padding-top: 34px;
}
.left {
  float: left;
  width: 653px;
}
.left span{
  display: inline-block;
  width: 220px;
  height: 120px;
  border-radius: 60px;
  font-size: 45px;
  text-align: center;
  line-height: 120px;
}
.week{
  background-color: #2b9a58;
}
.date{
  background-color: #b4c34c;
  margin-left: 2%;
}
.time{
  background-color: #83c3cc;
}
.right {
  display: inline-block;
  width: 1160px;
}
.right p{
  text-align: center;
  font-size: 60px;
  line-height: 120px;
}
</style>
