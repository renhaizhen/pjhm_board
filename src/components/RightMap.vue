<template>
  <div class="containers">
    <template>
    <div class="amap-wrapper">
       <el-amap class="cont"
        :amap-manager="amapManager"
        :vid="'amap-vue'"
        :zoom="zoom"
        :center="center"
        :events="events"
      >
       <!-- <el-amap-polygon v-for="(polygon, index) in polygons" :vid="index" :path="polygon.path" :strokeWeight="polygon.strokeWeight" :fillColor="polygon.fillColor" :strokeColor="polygon.strokeColor" :fillOpacity="polygon.fillOpacity" :strokeOpacity="polygon.strokeOpacity" :draggable="polygon.draggable" :key="index"></el-amap-polygon> -->
     </el-amap>
     <div id="container"></div>
    </div>
  </template>
      <!--
        amap-manager： 地图管理对象
        vid：地图容器节点的ID
        zooms： 地图显示的缩放级别范围，在PC上，默认范围[3,18]，取值范围[3-18]；在移动设备上，默认范围[3-19]，取值范围[3-19]
        center： 地图中心点坐标值
        plugin：地图使用的插件
        events： 事件
      -->
        <!-- 标记 -->

    </div>
</template>
<style lang="css">
.amap-wrapper {
  width: 775px;
  height: 900px;
}
</style>

<script>
import {AMapManager,lazyAMapApiLoaderInstance} from 'vue-amap'
let amapManager = new AMapManager()
export default {
  name:'HMap',
  data () {
    return {
      address: null,
      amapManager,
      center: [121.496837,31.048251],
      zoom: 10,
      mapData:null,
      polygons:[
        {
          strokeWeight: 2, 
          strokeColor: "#19A4EB", 
          strokeOpacity: 0.8, 
          fillColor: "green", 
          fillOpacity: 0,
          draggable: false,
          path: [
        [121.490164,31.058288], 
        [121.508102,31.063031],
        [121.510162,31.063692], 
        [121.511536,31.06428],
        [121.511793,31.059685], 
        [121.512609,31.045604], 
        [121.503425,31.046266], 
        [121.502953,31.048398], 
        [121.50218,31.057296],
        [121.49055,31.054465],
        [121.491237,31.053325], 
        [121.486602,31.052296], 
        [121.486945,31.050751], 
        [121.486988,31.049979], 
        [121.487374,31.049575], 
        [121.488833,31.047185], 
        [121.48922,31.047038], 
        [121.490336,31.041192], 
        [121.490507,31.040089], 
        [121.49085,31.039647], 
        [121.491323,31.03825], 
        [121.491451,31.036853], 
        [121.492138,31.035014], 
        [121.493039,31.033176], 
        [121.487804,31.031263], 
        [121.486774,31.033801], 
        [121.486087,31.03939], 
        [121.485701,31.039721], 
        [121.485872,31.041265], 
        [121.485486,31.042479], 
        [121.485357,31.045861], 
        [121.484413,31.048509], 
        [121.48407,31.051376], 
        [121.484113,31.051965], 
        [121.48334,31.052516], 
        [121.483169,31.053325], 
        [121.482739,31.05406], 
        [121.481581,31.057516], 
        [121.480722,31.060604], 
        [121.480894,31.061303], 
        [121.480594,31.062295], 
        [121.480207,31.062736], 
        [121.479735,31.06406], 
        [121.479778,31.064464], 
        [121.48201,31.065052], 
        [121.482225,31.065236], 
        [121.483512,31.065383], 
        [121.484027,31.065677], 
        [121.48849,31.066927], 
        [121.490207,31.058104], 
        [121.490207,31.058215]
        ],  
        },
      ],
      events: {
        init (o) {
         o.setMapStyle('amap://styles/e7f54effac53e3fa92002a63daf40d5e');//自定义的高德地图的样式  
        },
      },
    }
  },
    watch: {
    //观察seriesData的变化
    mapData: {
      handler(newVal) {
      	lazyAMapApiLoaderInstance.load().then(() => {
       this.initMap()
      });
      },
      deep: true //对象内部属性的监听，关键。
    },
  },
  created() {
    // this.getMapData()
  },
    mounted() {
    this.getMapData()
	lazyAMapApiLoaderInstance.load().then(() => {
       this.initMap()
      });
    this.yanTime()
  },
  methods: {
    getMapData(){
       this.$http.post("/api/home/heatMapData").then(data => {
        // console.log(data)
        this.mapData = data.body
      });
    },
    //延时执行测试
    yanTime(){
       setInterval(() => {
        this.getMapData()
      }, 600000);
    },
    initMap() {
      var that = this
      let map = new AMap.Map("amap-vue", {
        resizeEnable: false,
        center: [121.496837,31.048251],
        zoom: 14,
        zoomEnable:true,
        dragEnable: true
      });
      map.setMapStyle('amap://styles/e7f54effac53e3fa92002a63daf40d5e')
      //绘制折线
      var path = [
    new AMap.LngLat(121.490164,31.058288), 
    new AMap.LngLat(121.508102,31.063031),
    new AMap.LngLat(121.510162,31.063692), 
    new AMap.LngLat(121.511536,31.06428),
    new AMap.LngLat(121.511793,31.059685), 
    new AMap.LngLat(121.512609,31.045604), 
    new AMap.LngLat(121.503425,31.046266), 
    new AMap.LngLat(121.502953,31.048398), 
    new AMap.LngLat(121.50218,31.057296),
    new AMap.LngLat(121.49055,31.054465),
    new AMap.LngLat(121.491237,31.053325), 
    new AMap.LngLat(121.486602,31.052296), 
    new AMap.LngLat(121.486945,31.050751), 
    new AMap.LngLat(121.486988,31.049979), 
    new AMap.LngLat(121.487374,31.049575), 
    new AMap.LngLat(121.488833,31.047185), 
    new AMap.LngLat(121.48922,31.047038), 
    new AMap.LngLat(121.490336,31.041192), 
    new AMap.LngLat(121.490507,31.040089), 
    new AMap.LngLat(121.49085,31.039647), 
    new AMap.LngLat(121.491323,31.03825), 
    new AMap.LngLat(121.491451,31.036853), 
    new AMap.LngLat(121.492138,31.035014), 
    new AMap.LngLat(121.493039,31.033176), 
    new AMap.LngLat(121.487804,31.031263), 
    new AMap.LngLat(121.486774,31.033801), 
    new AMap.LngLat(121.486087,31.03939), 
    new AMap.LngLat(121.485701,31.039721), 
    new AMap.LngLat(121.485872,31.041265), 
    new AMap.LngLat(121.485486,31.042479), 
    new AMap.LngLat(121.485357,31.045861), 
    new AMap.LngLat(121.484413,31.048509), 
    new AMap.LngLat(121.48407,31.051376), 
    new AMap.LngLat(121.484113,31.051965), 
    new AMap.LngLat(121.48334,31.052516), 
    new AMap.LngLat(121.483169,31.053325), 
    new AMap.LngLat(121.482739,31.05406), 
    new AMap.LngLat(121.481581,31.057516), 
    new AMap.LngLat(121.480722,31.060604), 
    new AMap.LngLat(121.480894,31.061303), 
    new AMap.LngLat(121.480594,31.062295), 
    new AMap.LngLat(121.480207,31.062736), 
    new AMap.LngLat(121.479735,31.06406), 
    new AMap.LngLat(121.479778,31.064464), 
    new AMap.LngLat(121.48201,31.065052), 
    new AMap.LngLat(121.482225,31.065236), 
    new AMap.LngLat(121.483512,31.065383), 
    new AMap.LngLat(121.484027,31.065677), 
    new AMap.LngLat(121.48849,31.066927), 
    new AMap.LngLat(121.490207,31.058104), 
    new AMap.LngLat(121.490207,31.058215)
      ]
      var polygon = new AMap.Polygon({
          zIndex: 0,
          path: path,  
          strokeWeight: 2, 
          strokeColor: "#95cd77", 
          strokeOpacity: 0.8, 
          fillColor: "#95cd77", 
          fillOpacity:0.4,
          draggable: false,
    });
    map.add(polygon);
      let heatmap;
      let heatmapData = [
        { lng: 121.490164, lat: 31.058288, count: 1555 },
        { lng: 121.508102, lat: 31.063031, count: 2000 },
      ];
      map.plugin(["AMap.Heatmap"], function() {
        //初始化heatmap对象
        heatmap = new AMap.Heatmap(map, {
          zIndex: 160,
          radius: 30, //给定半径
          opacity: [0.1, 1],
          gradient: {
            0.5: 'blue',
            0.65: 'rgb(117,211,248)',
            0.7: 'rgb(0, 255, 0)',
            0.9: '#ffea00',
            1.0: 'red'
          }
        });
        //设置数据集
        heatmap.setDataSet({
          data: that.mapData,
          max: 100
        });
      });
    }
  }
}
</script>