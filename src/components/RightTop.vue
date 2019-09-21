<template>
  <div class="text">
      <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'RightTop',
  data () {
    return {
      text: '上海浦江郊野公园数据大屏'
    }
  },
}
</script>
<style scoped>
.text{
    overflow: hidden;
}
.text span {
    float: right;
    display: inline-block;
    font-size: 60px;
    font-family: 'SHSCNBold';
    margin-top: 61px;
    text-align: center;
    width: 720px;
    margin-right: 176px;
    color: #ffffff;
}
</style>
