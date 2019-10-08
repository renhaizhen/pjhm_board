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
.data{
  height: 1.77rem;
}
.data span{
  display: inline-block;
  border-radius: .6rem;
  font-size: .45rem;
  text-align: center;
  height: 1.17rem;
  font-size: .6rem;
  line-height: 1.17rem;
  margin-top: .31rem;
}
.week{
  background-color: #2B9B58 ;
  width: 1.83rem;
  font-family: 'SHSCNMidium';
  margin-left: .50rem;
}
.date{
  background-color: #a0bd44;
  width: 2.16rem;
  font-family: 'SHSCNMidium';
  margin: 0 .30rem;

}
.time{
  background-color: #83c3cc;
  width: 2.03rem;
  font-family: 'SHSCNMidium';
}

</style>
