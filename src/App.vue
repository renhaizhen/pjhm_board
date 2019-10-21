<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      screenWidth: document.body.clientWidth,//屏幕宽度
    }
  },
  watch:{
    screenWidth:function(newVal,oldVal){
      console.log(newVal,oldVal)
      if(newVal!==oldVal){
      this.resize()
      }
    }
  },
  mounted() {
    setTimeout(this.resize.bind(this), 100)
    setTimeout(this.resize.bind(this), 1000)
    // this.resize();
     const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }
  },
  methods: {
    //进行resize
    resize(){
      const global = document.getElementById(`app`);
      if(global) {
        console.log(window.innerHeight, `window.innerHeight...`);
        global.style.maxHeight = window.innerHeight + `px`;
        global.style.height = window.innerHeight + `px`;
      }
      // console.log(global.style.maxHeight, `window.screenHeightwindow.screenHeight`);
      const main = document.getElementById(`container`);
      const clientWidth = window.innerWidth;
      const clientHeight = window.innerHeight;
      const innerWidth = main.offsetWidth;
      const innerHeight = main.offsetHeight;
      // console.log(global, main, clientWidth,clientHeight,innerWidth,innerHeight, `innerHeight...`)
      let r = 1;
      let translate;
      if (clientWidth / clientHeight > innerWidth / innerHeight){//内部元素太长
        r = clientHeight / innerHeight   //缩放比例
        translate = `translateX(${Math.floor((clientWidth - innerWidth * r)/2)}px)`//这个反正遇不到，高 > 宽
      }else {
        r = clientWidth / innerWidth   //缩放比例
        translate = `translateY(${Math.floor((clientHeight - innerHeight * r)/2)}px)`
      }
      console.log(translate);
      main.style.transform = `${translate} scale(${r},${r})`
    },
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  overflow: hidden;
}
body{
  background-color: #2d6d3f;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x:hidden; 
  overflow-y: hidden;
}
#app {
  position: absolute;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: #2d6d3f;
  width: 100%;
  height: 100%;
  max-height:  100%;
  overflow: hidden;
}
/* div::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: rgba(122,122,122,0);
  }
  div::-webkit-scrollbar-thumb {
    background:  rgba(157, 157, 157, 0.4);
  } */
.container{
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  transform-origin: 0 0; 
}
.left{
  width: 777px;
  /* background-color: bisque; */
  float: left;
}
.leftTop{
  height: 177px;
  /* background-color: green; */

}
.leftContent{
  height: 701px;
  /* background-color: palevioletred; */

}
.leftBottom{
  height: 202px;
  /* background-color: blue; */
  position: relative;
}
.right{
  width: 1143px;
  /* background-color: black; */
  float: right;
}
.rightTop{
  height: 180px;
}
.rightContent{
  height: 511px;
  width: 1139px;
  border: 1px solid #ffffff;
  margin-top: 3px;
}
.rightBottomDes{
  height: 130px;
  /* background-color: pink; */
}
.rightBottom{
  height: 254px;
  /* background-color: purple; */
}
</style>
