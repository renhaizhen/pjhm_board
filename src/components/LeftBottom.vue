<template>
  <div class="bottomText">
      <span class="text">当前在园总人数</span>
      <span class="count">2500人</span>
  </div>
</template>

<script>
export default {
  name: 'LeftBottom',
  data () {
    return {
      count: null
    }
  },
  methods: {
    // handleData(){
    //    this.$http.post('/api/home/tourNum').then(data=>{
	// 		console.log(data.body)
	// 	})
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
