<template>
  <div class="container">
    <template>
    <div class="amap-wrapper">
       <el-amap class="amap-box"
        :amap-manager="amapManager"
        :vid="'amap-vue'"
        :zoom="zoom"
        :center="center"
        :events="events"
      >
       <el-amap-polygon v-for="(polygon, index) in polygons" :vid="index" :path="polygon.path" :draggable="polygon.draggable" :key="index"></el-amap-polygon>
     </el-amap>
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
  width: 1139px;
  height: 511px;
}
</style>

<script>
import {AMapManager, lazyAMapApiLoaderInstance} from 'vue-amap'
let amapManager = new AMapManager()
export default {
  name:'HMap',
  data () {
    return {
      address: null,
      amapManager,
      center: [121.496837,31.048251],
      zoom: 14,
      polygons:[
        {
          strokeWeight: 4, 
          strokeColor: "#19A4EB", 
          strokeOpacity: 0.8, 
          fillColor: "#19A4EB", 
          fillOpacity:0.2,
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
         o.setMapStyle('amap://styles/31444436f4e6420ee2c6b4ecec90f75f');//自定义的高德地图的样式  
        },
      },
    }
  },
  mounted() {
    // this.initMap()
  },
  //  methods:{
  //           initMap(){
  //               let map =  new AMap.Map('container', {
	// 				features: ['bg', 'road'],
	// 				resizeEnable: true,
	// 				center: [116.397428, 39.90923],
	// 				zoom: 11,
	// 				viewMode: '2D',
	// 				pitch: 50,
	// 				showZoomBar:true,
	// 			});
  //                   let heatmap;	
  //                   let heatmapData=[];
  //                   //从接口获取数据 
  //                   //官网示例数据结构 http://a.amap.com/jsapi_demos/static/resource/heatmapData.js
	// 	      this.$http.get("http://a.amap.com/jsapi_demos/static/resource/heatmapData.js").then(res => {
	// 			if(res.success) {					
	// 				if(res.data){
	// 					res.data.forEach(item=>{
	// 						let obj={
	// 							lng:item.longitude,
	// 							lat:item.latitude,
	// 							count:item.count,
	// 						}
	// 						heatmapData.push(obj);
	// 					})
	// 					map.plugin(["AMap.Heatmap"], function() {
	// 						//初始化heatmap对象
	// 						 heatmap = new AMap.Heatmap(map, {
	// 						      radius: 25, //给定半径
	// 						      opacity: [0, 0.8],
	// 						      gradient:{
	// 						        0.5: 'blue',
	// 						        0.65: 'rgb(117,211,248)',
	// 						        0.7: 'rgb(0, 255, 0)',
	// 						        0.9: '#ffea00',
	// 						        1.0: 'red'
	// 						     }
	// 						});
	// 						//设置数据集
	// 						heatmap.setDataSet({
	// 							data: heatmapData,
	// 								max: 5
	// 							});
	// 						});
	// 				}else{
	// 					heatmapData =[];
	// 				}
	// 			} else {
	// 				heatmapData =[];
	// 			}
	// 		});
  //       }
  //   },
}
</script>