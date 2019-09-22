<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #2d7140;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #2d7140;
  color: white;

}
.container{
  /* width: 100%; */
  width: 1920px;
  height: 1080px;
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
  background-color: #2d6d3e;
}
</style>
