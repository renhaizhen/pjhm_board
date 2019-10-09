// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import VueResource from 'vue-resource'
import echarts from 'echarts'
import VueAMap from 'vue-amap'
import './assets/fonts/fonts.css'
import './assets/fonts/reset.css'
// import './assets/fonts/rem.js'
Vue.use(VueAMap)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueResource)
VueAMap.initAMapApiLoader({
  key:'ff38603d7b67a443b8a7d8b822757b71',
  //ff38603d7b67a443b8a7d8b822757b71
  plugin: [
    "AMap.Autocomplete", //输入提示插件
    "AMap.PlaceSearch", //POI搜索插件
    "AMap.Scale", //右下角缩略图插件 比例尺
    "AMap.OverView", //地图鹰眼插件
    "AMap.ToolBar", //地图工具条
    "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    "AMap.PolyEditor", //编辑 折线多，边形
    "AMap.CircleEditor", //圆形编辑器插件
    "AMap.Geolocation", //定位控件，用来获取和展示用户主机所在的经纬度位置
    "AMap.Heatmap"//热力图插件
  ],
  v: '1.4.4',
  uiVersion: '1.0'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})