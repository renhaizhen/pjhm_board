<template>
  <div class="headerContainer">
    <div class="data">
      <span class="week">{{week}}</span>
      <span class="date">{{date}}</span>
      <span class="time">{{time}}</span>
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
        // console.log(newDate);
        //获取月日和具体时间
        var month = newDate.getMonth() + 1;
        var day = newDate.getDate();
        var hours = newDate.getHours();
        var minutes = newDate.getMinutes();
        var seconds = newDate.getSeconds()
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        this.date = month + "-" + day;
        this.time = hours + ":" + minutes+ ":" + seconds;
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
.data{
  height: 177px;
}
.data span{
  display: inline-block;
  border-radius: 60px;
  font-size: 45px;
  text-align: center;
  height: 117px;
  font-size: 60px;
  line-height: 117px;
  margin-top: 31px;
}
.week{
  background-color: #2B9B58 ;
  width: 183px;
  font-family: 'SHSCNMidium';
  margin-left: 10px;
}
.date{
  background-color: #a0bd44;
  width: 216px;
  font-family: 'MONLight';
  margin: 0 30px;

}
.time{
  background-color: #83c3cc;
  width: 270px;
  font-family: 'MONLight';
}

</style>
