<template>
  <div class="wrap">
    <div class="desLeft">
      <span>历史客流量统计</span>
    </div>
    <!-- <div class="desRight">
      <span>奇迹花园区</span>
      <span>柳鹫田园区</span>
      <span>森林游憩区</span>
      <span>活力森林区</span>
      <span>滨江漫步区</span>
    </div> -->
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
  width: 242px;
  height: 111px;
  float: left;
}
.desLeft span {
  font-size: 24px;
  display: inline-block;
  background-color: #51a769;
  width: 242px;
  height: 69px;
  border-radius: 34.5px;
  font-family: "SHSCNBold";
  text-align: center;
  line-height: 69px;
  margin-top: 33px;
  margin-left: 10px;
}
.desRight{
    float: right;
    height: 130px;
    width: 640px;
}
.desRight span{
    font-size: 20px;
    font-family: 'SHSCNMidium';
    width: 152px;
    height: 36px;
    display: inline-block;
    position: relative;
}
.desRight span::before{
            content: ' ';
            position: absolute;
            right: 173px;
            top: 0px;
            width: 25px;
            height: 25px;
            background-color: red;
            border-radius: 50%;
}
</style>
