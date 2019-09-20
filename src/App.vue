<template>
  <div id="app">
    <div class="container">
    <Header/>
    <HelloWorld/>
    <div class="content">
      <div class="table">
        <LeftEcharts/>
      </div>
      <div class="map">
        <HMap/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import LeftEcharts from './components/LeftEcharts'
import HMap from './components/HMap'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    LeftEcharts,
    HMap
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
  width: 94.48%;
  background-color: red;
  margin: 0 auto;
}
.content{
  height: 623px;
  margin-top: 22px;
  overflow: hidden;
}
.table{
  width: 590px;
  height: 590px;
  background-color: aqua;
  float: left;
}
.map{
  width: 1190px;
  height: 520px;
  float: right;
  
}
</style>
