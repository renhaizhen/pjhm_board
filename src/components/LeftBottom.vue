<template>
  <div class="bottomText">
      <span class="text">当前在园总人数</span>
      <span class="count">{{count}}人</span>
  </div>
</template>

<script>
export default {
  name: 'LeftBottom',
  data () {
    return {
      count: 2600
    }
  },
  methods: {
    // getSum(){
    //   let a = JSON.parse(localStorage.getItem("userData"))
    // console.log(a)
    // this.count = a.title
    // }
  },
}
</script>
<style scoped>
.bottomText{
    width: 409px;
    height: 200px;
    position: absolute;
    color: #ffffff;
    text-align: center;
    right: 145px;
    bottom: -50px;

}
.bottomText span{
    display: block;
}
.bottomText .text{
    font-size: 24px;
    font-family: 'SHSCNHeavy';
    line-height: 60px;
}
.bottomText .count{
    font-size: 68px;
    font-family: 'SHSCNHeavy';
}
</style>
