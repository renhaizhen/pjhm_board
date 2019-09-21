<template>
  <div id="app">
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
        <div class="rightBottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Header from './components/LeftHeader'
import LeftEcharts from './components/LeftEcharts'
import RightTop from './components/RightTop'
import HMap from './components/RightMap'
import LeftBottom from './components/LeftBottom'
import RightBottomDes from './components/RightBottomDes'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    LeftEcharts,
    LeftBottom,
    RightTop,
    HMap,
    RightBottomDes
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #2d7140;
  color: white;
  width: 1920px;
  height: 1080px;
}
.container{
  width: 100%;
  background-color: red;
  overflow: hidden;
}
.left{
  width: 777px;
  height: 1080px;
  background-color: bisque;
  float: left;
}
.leftTop{
  height: 177px;
  background-color: green;

}
.leftContent{
  height: 701px;
  background-color: palevioletred;

}
.leftBottom{
  height: 202px;
  background-color: blue;
  position: relative;
}
.right{
  width: 1143px;
  height: 1080px;
  background-color: black;
  float: right;
}
.rightTop{
  height: 180px;
}
.rightContent{
  height: 511px;
  width: 1139px;
  border: 2px solid #ffffff;
}
.rightBottomDes{
  height: 130px;
  background-color: pink;
}
.rightBottom{
  height: 255px;
  background-color: aquamarine;
}
</style>
