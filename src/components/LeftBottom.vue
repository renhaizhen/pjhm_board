<template>
  <div class="bottomText">
    <span class="text">当前在园总人数</span>
    <span class="count">{{count}}人</span>
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
  width: 4.09rem;
  height: 2rem;
  position: absolute;
  color: #ffffff;
  text-align: center;
  right: 1.45rem;
  bottom: -0.5rem;
}
.bottomText span {
  display: block;
}
.bottomText .text {
  font-size: .24rem;
  font-family: "SHSCNHeavy";
  line-height: .60rem;
}
.bottomText .count {
  font-size: .68rem;
  font-family: "SHSCNHeavy";
}
</style>
