<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.setHeight()
  },
  methods: {
    setHeight(){
      var ss;
		// var w=window.screen.availWidth ;
    var h=window.innerHeight;
    console.log(h,888)
		ss=document.getElementById('app');
		//alert(w);
		// ss.style.width=w+"px";
		ss.style.height=h+"px";
		// ss.style.width = h+"px";
		document.getElementsByTagName("body")[0].style.height = h/100+"rem";
    document.getElementsByTagName("html")[0].style.height = h/100+"rem";		
    }
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  /* background-color: #2d7140; */
  min-width: 800px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: #2d6d3f;
}
.container{
  width: 100%;
  height: 100%;
  min-width: 800px;
  overflow: hidden;
}
.left{
  width: 7.77rem;
  /* background-color: bisque; */
  float: left;
}
.leftTop{
  height: 1.77rem;
  /* background-color: green; */

}
.leftContent{
  height: 7.01rem;
  /* background-color: palevioletred; */

}
.leftBottom{
  height: 2.02rem;
  /* background-color: blue; */
  position: relative;
}
.right{
  width: 11.43rem;
  /* background-color: black; */
  float: right;
}
.rightTop{
  height: 1.8rem;
}
.rightContent{
  height: 5.13rem;
  width: 11.39rem;
  /* border: 1px solid #ffffff; */
  margin-top: 0.03rem;
}
.rightBottomDes{
  height: 1.3rem;
  /* background-color: pink; */
}
.rightBottom{
  height: 2.54rem;
  /* background-color: purple; */
}
</style>
