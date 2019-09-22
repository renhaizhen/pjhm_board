<template>
  <div>
    <div class="container">
      <div class="left">
        <div class="leftTop">
          <Header/>
        </div>
        <div class="leftContent">
          <LeftEcharts/>
        </div>
        <div class="leftBottom">
          <LeftBottom/>
        </div>
      </div>
      <div class="right">
        <div class="rightTop">
          <RightTop/>
        </div>
        <div class="rightContent">
        <HMap/>
        </div>
        <div class="rightBottomDes">
          <RightBottomDes/>
        </div>
        <div class="rightBottom">
          <RightBottom/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Header from '@/components/LeftHeader'
import LeftEcharts from '@/components/LeftEcharts'
import RightTop from '@/components/RightTop'
import HMap from '@/components/RightMap'
import LeftBottom from '@/components/LeftBottom'
import RightBottomDes from '@/components/RightBottomDes'
import RightBottom from '@/components/RightBottom'
export default {
  name: 'Board',
  components: {
    // HelloWorld,
    Header,
    LeftEcharts,
    LeftBottom,
    RightTop,
    HMap,
    RightBottomDes,
    RightBottom
  }
}
</script>

<style>
</style>
