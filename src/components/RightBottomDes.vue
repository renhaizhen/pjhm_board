<template>
  <div class="wrap">
    <div class="desLeft">
      <span>历史客流量统计</span>
    </div>
    <div class="desRight">
      <span><i class="qiji"></i>奇迹花园区</span>
      <span><i class="liujiu"></i>柳鹭田园区</span>
      <span><i class="senlin"></i>森林游憩区</span>
      <span><i class="huoli"></i>活力森林区</span>
      <span><i class="binjiang"></i>滨江漫步区</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBottomDes",
  data() {
    return {};
  }
};
</script>

<style scoped>
.wrap {
  color: #ffffff;
  overflow: hidden;
}
.desLeft {
  width: 2.42rem;
  height: 1.11rem;
  float: left;
}
.desLeft span {
  font-size: .24rem;
  display: inline-block;
  background-color: #51a769;
  width: 2.42rem;
  height: .69rem;
  border-radius: .345rem;
  font-family: "SHSCNBold";
  text-align: center;
  line-height: .69rem;
  margin-top: .33rem;
  margin-left: .10rem;
}
.desRight {
  float: right;
  height: 1.30rem;
  width: 6.40rem;
  margin-top: .30rem;
}
.desRight span {
  font-size: .20rem;
  font-family: "SHSCNMidium";
  width: 2rem;
  height: .36rem;
  display: inline-block;
  position: relative;
}
.desRight span i {
  position: absolute;
  right: 2.25rem;
  top: -0.01rem;
  width: .25rem;
  height: .25rem;
  border-radius: 50%;
}
.qiji{
  background-color: #ffffff;
}
.liujiu{
  background-color: #a0bd44;
}
.senlin{
  background-color: #e4c64c;
}
.huoli{
  background-color: #5db874;
}
.binjiang{
  background-color: #86ccd6;
}
</style>
