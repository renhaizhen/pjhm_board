<template>
  <div class="bottomText">
    <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <div class="people">
        <p class="text">当前在园总人数</p>
        <p class="count">{{count}}人</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftBottom",
  data() {
    return {
      count: 44
    };
  },
watch: {
    '$store.state.count': function () {
      //你需要执行的代码
      this.count = this.$store.state.count
    }
  },
  methods: {}
};
</script>
<style scoped>
.bottomText {
  height: 200px;
  color: #ffffff;
  text-align: center;
  z-index: 100;
}
.bottomText span {
  display:  inline-block;
  position: absolute;
  border-radius: 50%
}
.bottomText .circle1{
  height: 264px;
  width: 264px;
  background-color:#BBE8ED;
  left: -86px;
  bottom: -137px; 
  z-index: 101;
  opacity: .8;
}
.bottomText .circle2{
  height: 218px;
  width: 218px;
  background-color: #5DB874 ;
  left: 78px;
  bottom: -108px;   
}
.bottomText .circle3{
  height: 400px;
  width: 400px;
  background-color:#B4C34C;
  left: 221px;
  bottom: -200px; 
  z-index: 102;
  opacity: .8;
}
.bottomText .circle4{
  height: 120px;
  width: 120px;
  background-color: #E4C64C ;
  right: 50px;
  bottom: -46px; 
  z-index: 103;
  opacity: .8;
}
.bottomText .people{
  position: absolute;
  text-align: center;
  width: 400px;
  height: 200px;
  left: 230px;
  bottom: -42px;
  z-index: 105;
}
.bottomText .text {
  font-size: 24px;
  font-family: "SHSCNHeavy";
  line-height: 60px;
}
.bottomText .count {
  font-size: 68px;
  font-family: "SHSCNHeavy";
}
</style>