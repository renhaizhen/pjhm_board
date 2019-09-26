<template>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'" :events="mapEvents"></el-amap>
    </div>
  </template>

  <style>
   .amap-wrapper {
  width: 1139px;
  height: 511px;
}
  </style>
  <script>
    export default {
        name:'HMAP',
        data() {
        return {
         zoom: 15,
          center: [121.496837, 31.048251],
          circles: [
            {
              center: [121.5273285, 31.21515044],
              radius: 200,
              fillOpacity: 0.5,
              events: {
                click: () => {
                  alert('click');
                }
              }
            }
          ],
          mapEvents: {
                init(o) {
                     o.setMapStyle('amap://styles/lbs.amap.com/dev/mapstyle/clone?id=ceee819ff37b0613795bcc2b80635d9e');//自定义的高德地图的样式                  
               }
          }
        }
      }
    }
</script>