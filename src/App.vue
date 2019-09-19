<template>
  <div id="app">
    <Header/>
    <HelloWorld/>
    <div class="content">
      <div class="table">

      </div>
      <div class="map">

      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
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
}
.content{
  height: 623px;
  margin-top: 22px;
}
.table{
  width: 33.3%;
  height: 623px;
  background-color: aqua;
  float: left;
  margin-left: 3%;
}
.map{
  width: 30.7%;
  height: 623px;
}
</style>
