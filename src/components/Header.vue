<template>
  <div class="headerContainer">
    <div class="left">
      <span class="week">{{week}}</span>
      <span class="date">{{date}}</span>
    </div>
    <div class="right">
      <span>{{time}}</span>
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
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        this.week = weekday[newDate.getDay()];
      }, 1000);
    }
  }
};
</script>

<style scoped>
.headerContainer {
  overflow: hidden;
}
.left {
  float: left;
  width: 36.3%;
}
.right {
  display: inline-block;
  width: 63.7%;
}
</style>
