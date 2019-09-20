<template>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </template>

  <style>
   .amap-wrapper {
  width: 1192px;
  height: 520px;
}
  </style>
  <script>
    export default {
        name:'HMAP',
        data() {
        return {
         zoom: 15,
          center: [121.5273285, 31.21515044],
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
          ]
        }
      }
    }
</script>